import { ActionPeopleRequest } from "./../action";
import { fork, takeEvery } from "redux-saga/effects";
import { PEOPLE_REQUEST } from "../action";
import { peopleSaga } from "./";
import { watchRoutePeople } from "./watchRoutePeople";
import { loadPeopleList } from "./loadPeopleList";

describe("people saga", () => {
  let gen: ReturnType<typeof peopleSaga>;

  beforeEach(() => {
    gen = peopleSaga();
  });

  it("peopleSaga", () => {
    expect(gen.next().value).toEqual(fork(watchRoutePeople));

    expect(gen.next().value).toEqual(
      takeEvery<ActionPeopleRequest>(PEOPLE_REQUEST, loadPeopleList)
    );
  });
});
