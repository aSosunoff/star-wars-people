import { call, put } from "redux-saga/effects";
import { PagesType } from "../../../app/interfaces/pages-type";
import { Person } from "../../../app/interfaces/person";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPeoleFailure,
  ActionPeopleRequest,
  ActionPeopleSuccess,
  PEOPLE_FAILURE,
  PEOPLE_SUCCESS,
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
      type: PEOPLE_SUCCESS,
      payload: pageData,
    });
  } catch (error: any) {
    yield put<ActionPeoleFailure>({
      type: PEOPLE_FAILURE,
      payload: error,
    });
  }
}
