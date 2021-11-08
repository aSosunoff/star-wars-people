import { selectorPeopleDetail } from "./../selectors/selector-people-detail";
import { select } from "redux-saga/effects";
import { getPerson } from "./getPerson";
import { Person } from "../../../app/interfaces/person";

describe("getPerson", () => {
  const idPerson = "1";
  const person = {} as Person;
  let gen: ReturnType<typeof getPerson>;

  beforeEach(() => {
    gen = getPerson(idPerson);
  });

  it("check person is not found", () => {
    expect(gen.next().value).toEqual(select(selectorPeopleDetail));
    //[idPerson]: { person, expired: 2 }

    expect(
      gen.next({
        persons: {},
        id: null,
        error: null,
        loading: false,
      }).value
    ).toBeFalsy();

    /* expect(gen.next().value).toEqual(
      takeEvery<ActionPeopleRequest>(PEOPLE_REQUEST, loadPeopleList)
    ); */
  });
});
