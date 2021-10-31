import { call, put } from "redux-saga/effects";

import { Person } from "../../../app/interfaces/person";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPeopleDetailFailure,
  ActionPeopleDetailRequest,
  ActionPeopleDetailSuccess,
  PEOPLE_DETAIL_FAILURE,
  PEOPLE_DETAIL_SUCCESS,
} from "../action";

export function* loadPeopleDetail({
  payload: { id },
}: ActionPeopleDetailRequest) {
  try {
    const pageData: Person = yield call(SWAPIService.getPeopleDetail, id);

    yield put<ActionPeopleDetailSuccess>({
      type: PEOPLE_DETAIL_SUCCESS,
      payload: pageData,
    });
  } catch (error: any) {
    yield put<ActionPeopleDetailFailure>({
      type: PEOPLE_DETAIL_FAILURE,
      payload: error,
    });
  }
}
