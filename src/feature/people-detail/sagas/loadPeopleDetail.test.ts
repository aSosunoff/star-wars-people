import {
  ActionPeopleDetailFailure,
  PEOPLE_DETAIL_FAILURE,
  PEOPLE_DETAIL_REQUEST,
  PEOPLE_DETAIL_SUCCESS,
} from "./../action";
import { call, put } from "redux-saga/effects";
import moment, { Moment } from "moment";

import { loadPeopleDetail } from "./loadPeopleDetail";
import { SWAPIService } from "../../../app/services/SWAPIService";
import { Person } from "../../../app/interfaces/person";
import { getPerson } from "./getPerson";
import { StateRoot } from "../../../app/redux/reducers";

jest.mock("moment");

describe("loadPeopleDetail", () => {
  const idPerson = "1";

  let gen: ReturnType<typeof loadPeopleDetail>;

  beforeEach(() => {
    gen = loadPeopleDetail({
      payload: { id: idPerson },
      type: PEOPLE_DETAIL_REQUEST,
    });
  });

  it("if person is not found", async () => {
    expect(gen.next().value).toEqual(call(getPerson, idPerson));

    expect(gen.next(null as any).value).toEqual(call(SWAPIService.getPeopleDetail, idPerson));

    const data: Person = { name: "user1" } as Person;

    const momentMock = moment as jest.MockedFunction<typeof moment>;

    momentMock.mockImplementation(
      () =>
        ({
          add: () => ({
            toDate: () => ({
              getTime: () => Date.now(),
            }),
          }),
        } as Moment)
    );

    expect(gen.next(data as any).value).toEqual(
      put({
        type: PEOPLE_DETAIL_SUCCESS,
        payload: {
          id: idPerson,
          person: data,
          expired: momentMock().add(2, "m").toDate().getTime(),
        },
      })
    );
  });

  it("if person is found", async () => {
    expect(gen.next().value).toEqual(call(getPerson, idPerson));

    const data: Person = { name: "user1" } as Person;

    const person: StateRoot["peopleDetail"]["persons"][any] = { person: data, expired: Date.now() };

    expect(gen.next(person as any).value).toEqual(
      put({
        type: PEOPLE_DETAIL_SUCCESS,
        payload: {
          id: idPerson,
          person: person.person,
          expired: person.expired,
        },
      })
    );
  });

  /* it("catch", () => {
    gen.next();

    const error = new Error("error");

    expect(gen.throw(error).value).toEqual(
      put<ActionPeopleDetailFailure>({
        type: PEOPLE_DETAIL_FAILURE,
        payload: error,
      })
    );
  }); */
});
