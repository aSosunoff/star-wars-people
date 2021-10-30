import { PagesType } from "../../app/interfaces.ts/pages-type";
import { Person } from "../../app/interfaces.ts/person";
import { CreateAction } from "../../app/redux/reducers/helpers";

export type ActionPeople = {
  PEOPLE_REQUEST: {
    payload: {
      page: number;
      search: string;
    };
  };
  PEOPLE_SUCCESS: { payload: PagesType<Person> };
  PEOPLE_FAILURE: { payload: any };
};

export const PEOPLE_REQUEST = "PEOPLE_REQUEST";
export type dispatchPeopleRequest = typeof PEOPLE_REQUEST;
export type ActionPeopleRequest = CreateAction<
  ActionPeople,
  dispatchPeopleRequest
>;

export const PEOPLE_SUCCESS = "PEOPLE_SUCCESS";
export type dispatchPeopleSuccess = typeof PEOPLE_SUCCESS;
export type ActionPeopleSuccess = CreateAction<
  ActionPeople,
  dispatchPeopleSuccess
>;

export const PEOPLE_FAILURE = "PEOPLE_FAILURE";
export type dispatchPeopleFalure = typeof PEOPLE_FAILURE;
export type ActionPeaoleFailure = CreateAction<
  ActionPeople,
  dispatchPeopleFalure
>;
