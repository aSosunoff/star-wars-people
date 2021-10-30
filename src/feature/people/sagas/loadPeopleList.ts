import { call, put } from "redux-saga/effects";
import { PagesType } from "../../../app/interfaces.ts/pages-type";
import { Person } from "../../../app/interfaces.ts/person";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPeaoleFailure,
  ActionPeopleRequest,
  ActionPeopleSuccess,
  typePeopleFalure,
  typePeopleSuccess,
} from "../action";

export function* loadPeopleList({
  payload: { search, page },
}: ActionPeopleRequest) {
  try {
    const pageData: PagesType<Person> = yield call(
      SWAPIService.getPeople,
      page,
      search
    );

    yield put<ActionPeopleSuccess>({
      type: typePeopleSuccess,
      payload: pageData,
    });
  } catch (error: any) {
    yield put<ActionPeaoleFailure>({
      type: typePeopleFalure,
      payload: error,
    });
  }
}
