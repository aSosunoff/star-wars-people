import { takeEvery, fork } from "redux-saga/effects";
import { ActionPeopleRequest, PEOPLE_REQUEST } from "../action";
import { loadPeopleList } from "./loadPeopleList";
import { watchRoutePeople } from "./watchRoutePeople";

export function* peopleSaga() {
  yield fork(watchRoutePeople);

  yield takeEvery<ActionPeopleRequest>(PEOPLE_REQUEST, loadPeopleList);
}
