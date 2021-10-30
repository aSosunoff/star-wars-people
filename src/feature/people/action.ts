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

export const typePeopleRequest = "PEOPLE_REQUEST";
export type dispatchPeopleRequest = typeof typePeopleRequest;
export type ActionPeopleRequest = CreateAction<
  ActionPeople,
  dispatchPeopleRequest
>;

export const typePeopleSuccess = "PEOPLE_SUCCESS";
export type dispatchPeopleSuccess = typeof typePeopleSuccess;
export type ActionPeopleSuccess = CreateAction<
  ActionPeople,
  dispatchPeopleSuccess
>;

export const typePeopleFalure = "PEOPLE_FAILURE";
export type dispatchPeopleFalure = typeof typePeopleFalure;
export type ActionPeaoleFailure = CreateAction<
  ActionPeople,
  dispatchPeopleFalure
>;
