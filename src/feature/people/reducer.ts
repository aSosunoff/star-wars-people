import { Reducer } from "redux";

import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";
import { Person } from "../../app/interfaces.ts/person";
import { PagesType } from "../../app/interfaces.ts/pages-type";
import {
  ActionPeaoleFailure,
  ActionPeople,
  ActionPeopleRequest,
  ActionPeopleSuccess,
} from "./action";

type State = {
  pageData: PagesType<Person> | null;
  page: number;
  search: string;
  loading: boolean;
  error: any;
};

const initialState: State = {
  pageData: null,
  page: 1,
  search: "",
  loading: false,
  error: null,
};

const handlers: Handler<State, ActionPeople> = {
  REQUEST: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  FAILURE: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  SUCCESS: (state, action) => ({
    ...state,
    loading: false,
    people: action.payload,
  }),
  DEFAULT: (state) => state,
};

export const peopleReducer: Reducer<
  State,
  ActionPeopleRequest | ActionPeopleSuccess | ActionPeaoleFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
