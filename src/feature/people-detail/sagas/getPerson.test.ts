import moment from "moment";
import { select } from "redux-saga/effects";
import { getPerson } from "./getPerson";
import { selectorPeopleDetail } from "./../selectors/selector-people-detail";
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

    expect(
      gen.next({
        persons: {},
        id: null,
        error: null,
        loading: false,
      }).value
    ).toBeNull();
  });

  it("return null if person expired less than current date", () => {
    gen.next();

    expect(
      gen.next({
        persons: {
          [idPerson]: {
            person,
            expired: moment().add(-1, "m").toDate().getTime(),
          },
        },
        id: null,
        error: null,
        loading: false,
      }).value
    ).toBeNull();
  });

  it("return person if person expired more than current date", () => {
    gen.next();

    const item = {
      person,
      expired: moment().add(2, "m").toDate().getTime(),
    };

    expect(
      gen.next({
        persons: {
          [idPerson]: item,
        },
        id: null,
        error: null,
        loading: false,
      }).value
    ).toEqual(item);
  });
});
