import { takeEvery, fork } from "redux-saga/effects";
import { ActionPeopleDetailRequest, PEOPLE_DETAIL_REQUEST } from "../action";
import { loadPeopleDetail } from "./loadPeopleDetail";
import { watchRoutePeopleDetail } from "./watchRoutePeopleDetail";

export function* peopleDetailSaga() {
  yield fork(watchRoutePeopleDetail);

  yield takeEvery<ActionPeopleDetailRequest>(
    PEOPLE_DETAIL_REQUEST,
    loadPeopleDetail
  );
}
