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
  persons: {
    [id: string]: {
      expired: number;
      person: Person;
    };
  };
  id: string | null;
  loading: boolean;
  error: {
    detail: string;
  } | null;
};

const initialState: StatePeopleDetail = {
  persons: {},
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
    persons: {
      ...state.persons,
      [action.payload.id]: {
        expired: action.payload.expired,
        person: action.payload.person,
      },
    },
  }),
  DEFAULT: (state) => state,
};

export const peopleDetailReducer: Reducer<
  StatePeopleDetail,
  | ActionPeopleDetailRequest
  | ActionPeopleDetailSuccess
  | ActionPeopleDetailFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
