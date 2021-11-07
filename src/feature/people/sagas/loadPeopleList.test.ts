import { PagesType } from "./../../../app/interfaces/pages-type";
import { ActionPeopleSuccess } from "./../action";
import { call, put } from "redux-saga/effects";
import { loadPeopleList } from "./loadPeopleList";
import { SWAPIService } from "../../../app/services/SWAPIService";
import { PEOPLE_SUCCESS, PEOPLE_REQUEST, PEOPLE_FAILURE } from "../action";
import { Person } from "../../../app/interfaces/person";

describe("loadPeopleList", () => {
  const search = "";
  const page = 1;
  let gen: ReturnType<typeof loadPeopleList>;

  beforeEach(() => {
    gen = loadPeopleList({
      payload: { search, page },
      type: PEOPLE_REQUEST,
    });
  });

  it("try", () => {
    expect(gen.next().value).toEqual(
      call(SWAPIService.getPeople, page, search)
    );

    const pageData: PagesType<Person> = {} as any;

    expect(gen.next(pageData).value).toEqual(
      put<ActionPeopleSuccess>({
        type: PEOPLE_SUCCESS,
        payload: pageData,
      })
    );
  });
});
