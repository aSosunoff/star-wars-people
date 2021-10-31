import { Reducer } from "redux";

import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";
import { Person } from "../../app/interfaces.ts/person";
import { PagesType } from "../../app/interfaces.ts/pages-type";
import {
  ActionPeoleFailure,
  ActionPeople,
  ActionPeopleRequest,
  ActionPeopleSuccess,
  PEOPLE_REQUEST,
  PEOPLE_FAILURE,
  PEOPLE_SUCCESS,
} from "./action";

type StatePeople = {
  pageData: PagesType<Person> | null;
  page: number;
  pageSize: number;
  search: string;
  loading: boolean;
  error: {
    detail: string;
  } | null;
};

const initialState: StatePeople = {
  pageData: null,
  page: 1,
  pageSize: 10,
  search: "",
  loading: false,
  error: null,
};

const handlers: Handler<StatePeople, ActionPeople> = {
  [PEOPLE_REQUEST]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  [PEOPLE_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [PEOPLE_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    pageData: action.payload,
  }),
  DEFAULT: (state) => state,
};

export const peopleReducer: Reducer<
  StatePeople,
  ActionPeopleRequest | ActionPeopleSuccess | ActionPeoleFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
