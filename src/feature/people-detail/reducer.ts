import { Reducer } from "redux";

import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";
import { Person } from "../../app/interfaces/person";
import {
  ActionPeopleDetailFailure,
  ActionPeopleDetail,
  ActionPeopleDetailRequest,
  ActionPeopleDetailSuccess,
  PEOPLE_DETAIL_REQUEST,
  PEOPLE_DETAIL_FAILURE,
  PEOPLE_DETAIL_SUCCESS,
} from "./action";

type StatePeopleDetail = {
  person: Person | null;
  id: string | null;
  loading: boolean;
  error: {
    detail: string;
  } | null;
};

const initialState: StatePeopleDetail = {
  person: null,
  id: null,
  loading: false,
  error: null,
};

const handlers: Handler<StatePeopleDetail, ActionPeopleDetail> = {
  [PEOPLE_DETAIL_REQUEST]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  [PEOPLE_DETAIL_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [PEOPLE_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    pageData: action.payload,
  }),
  DEFAULT: (state) => state,
};

export const peopleDetailReducer: Reducer<
  StatePeopleDetail,
  | ActionPeopleDetailRequest
  | ActionPeopleDetailSuccess
  | ActionPeopleDetailFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
