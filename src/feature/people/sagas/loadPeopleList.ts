import { call, put } from "redux-saga/effects";
import { PagesType } from "../../../app/interfaces.ts/pages-type";
import { Person } from "../../../app/interfaces.ts/person";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPeaoleFailure,
  ActionPeopleRequest,
  ActionPeopleSuccess,
} from "../../../feature/people/reducer";

export function* loadPeopleList() {
  yield put<ActionPeopleRequest>({
    type: "REQUEST",
  });

  try {
    const pageData: PagesType<Person> = yield call(SWAPIService.getPeople);

    yield put<ActionPeopleSuccess>({
      type: "SUCCESS",
      payload: pageData,
    });
  } catch (error: any) {
    yield put<ActionPeaoleFailure>({
      type: "FAILURE",
      payload: error,
    });
  }
}
