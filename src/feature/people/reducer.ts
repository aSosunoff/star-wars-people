import { Reducer } from "redux";

import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";
import { Person } from "../../app/interfaces.ts/person";
import { PagesType } from "../../app/interfaces.ts/pages-type";
import {
  ActionPeaoleFailure,
  ActionPeople,
  ActionPeopleRequest,
  ActionPeopleSuccess,
  typePeopleFalure,
  typePeopleRequest,
  typePeopleSuccess,
} from "./action";

type StatePeople = {
  pageData: PagesType<Person> | null;
  page: number;
  search: string;
  loading: boolean;
  error: any;
};

const initialState: StatePeople = {
  pageData: null,
  page: 1,
  search: "",
  loading: false,
  error: null,
};

const handlers: Handler<StatePeople, ActionPeople> = {
  [typePeopleRequest]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  [typePeopleFalure]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [typePeopleSuccess]: (state, action) => ({
    ...state,
    loading: false,
    pageData: action.payload,
  }),
  DEFAULT: (state) => state,
};

export const peopleReducer: Reducer<
  StatePeople,
  ActionPeopleRequest | ActionPeopleSuccess | ActionPeaoleFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
