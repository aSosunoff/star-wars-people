import { Reducer } from "redux";

import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";
import { PagesType } from "../../app/interfaces/pages-type";
import {
  ActionPlanetsFailure,
  ActionPlanets,
  ActionPlanetsRequest,
  ActionPlanetsSuccess,
  PLANETS_REQUEST,
  PLANETS_FAILURE,
  PLANETS_SUCCESS,
} from "./action";
import { Planet } from "../../app/interfaces/planet";

type StatePlanets = {
  pageData: PagesType<Planet> | null;
  page: number;
  pageSize: number;
  search: string;
  loading: boolean;
  error: {
    detail: string;
  } | null;
};

const initialState: StatePlanets = {
  pageData: null,
  page: 1,
  pageSize: 10,
  search: "",
  loading: false,
  error: null,
};

const handlers: Handler<StatePlanets, ActionPlanets> = {
  [PLANETS_REQUEST]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  [PLANETS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [PLANETS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    pageData: action.payload,
  }),
  DEFAULT: (state) => state,
};

export const planetsReducer: Reducer<
  StatePlanets,
  ActionPlanetsRequest | ActionPlanetsSuccess | ActionPlanetsFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
