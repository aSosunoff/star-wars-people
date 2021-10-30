import { PagesType } from "../../app/interfaces.ts/pages-type";
import { Person } from "../../app/interfaces.ts/person";
import { CreateAction } from "../../app/redux/reducers/helpers";

export type ActionPeople = {
  REQUEST: {
    payload: {
      page: number;
      search: string;
    };
  };
  SUCCESS: { payload: PagesType<Person> };
  FAILURE: { payload: any };
};

export const typePeopleRequest = "REQUEST";
export type dispatchPeopleRequest = typeof typePeopleRequest;
export type ActionPeopleRequest = CreateAction<
  ActionPeople,
  dispatchPeopleRequest
>;

export const typePeopleSuccess = "SUCCESS";
export type dispatchPeopleSuccess = typeof typePeopleSuccess;
export type ActionPeopleSuccess = CreateAction<
  ActionPeople,
  dispatchPeopleSuccess
>;

export const typePeopleFalure = "FAILURE";
export type dispatchPeopleFalure = typeof typePeopleFalure;
export type ActionPeaoleFailure = CreateAction<
  ActionPeople,
  dispatchPeopleFalure
>;
