import { Person } from "../../app/interfaces/person";
import { CreateAction } from "../../app/redux/reducers/helpers";

export const PEOPLE_DETAIL_REQUEST = "PEOPLE_DETAIL_REQUEST";
export type dispatchPeopleDetailRequest = typeof PEOPLE_DETAIL_REQUEST;
export type ActionPeopleDetailRequest = CreateAction<
  ActionPeopleDetail,
  dispatchPeopleDetailRequest
>;

export const PEOPLE_DETAIL_SUCCESS = "PEOPLE_DETAIL_SUCCESS";
export type dispatchPeopleDetailSuccess = typeof PEOPLE_DETAIL_SUCCESS;
export type ActionPeopleDetailSuccess = CreateAction<
  ActionPeopleDetail,
  dispatchPeopleDetailSuccess
>;

export const PEOPLE_DETAIL_FAILURE = "PEOPLE_DETAIL_FAILURE";
export type dispatchPeopleDetailFailure = typeof PEOPLE_DETAIL_FAILURE;
export type ActionPeopleDetailFailure = CreateAction<
  ActionPeopleDetail,
  dispatchPeopleDetailFailure
>;

export type ActionPeopleDetail = {
  [PEOPLE_DETAIL_REQUEST]: {
    payload: {
      id: string;
    };
  };
  [PEOPLE_DETAIL_SUCCESS]: {
    payload: {
      id: string;
      person: Person;
      expired: number;
    };
  };
  [PEOPLE_DETAIL_FAILURE]: { payload: any };
};
