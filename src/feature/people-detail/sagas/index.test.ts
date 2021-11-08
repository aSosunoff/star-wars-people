import { ActionPeopleDetailRequest } from "./../action";
import { fork, takeEvery } from "redux-saga/effects";
import { PEOPLE_DETAIL_REQUEST } from "../action";
import { peopleDetailSaga } from "./";
import { watchRoutePeopleDetail } from "./watchRoutePeopleDetail";
import { loadPeopleDetail } from "./loadPeopleDetail";

describe("people detail saga", () => {
  let gen: ReturnType<typeof peopleDetailSaga>;

  beforeEach(() => {
    gen = peopleDetailSaga();
  });

  it("peopleDetailSaga", () => {
    expect(gen.next().value).toEqual(fork(watchRoutePeopleDetail));

    expect(gen.next().value).toEqual(
      takeEvery<ActionPeopleDetailRequest>(PEOPLE_DETAIL_REQUEST, loadPeopleDetail)
    );
  });
});
