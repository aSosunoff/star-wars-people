import { Reducer } from "redux";

import {
  CreateReducer,
  CreateAction,
  Handler,
} from "../../app/redux/reducers/helpers";
import { Person } from "../../app/interfaces.ts/person";
import { PagesType } from "../../app/interfaces.ts/pages-type";

type ActionPeople = {
  REQUEST: void;
  SUCCESS: { payload: PagesType<Person> };
  FAILURE: { payload: any };
};

export type ActionPeopleRequest = CreateAction<ActionPeople, "REQUEST">;
export type ActionPeopleSuccess = CreateAction<ActionPeople, "SUCCESS">;
export type ActionPeaoleFailure = CreateAction<ActionPeople, "FAILURE">;

type State = {
  pageData: PagesType<Person> | null;
  loading: boolean;
  error: any;
};

const initialState: State = {
  pageData: null,
  loading: false,
  error: null,
};

const handlers: Handler<State, ActionPeople> = {
  REQUEST: (state) => ({
    ...state,
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
