import { Reducer } from "redux";

import { CreateReducer, Handler } from "../../app/redux/reducers/helpers";
import { Planet } from "../../app/interfaces/planet";
import {
  ActionPlanetDetailFailure,
  ActionPlanetDetail,
  ActionPlanetDetailRequest,
  ActionPlanetDetailSuccess,
  PLANET_DETAIL_REQUEST,
  PLANET_DETAIL_FAILURE,
  PLANET_DETAIL_SUCCESS,
} from "./action";

type StatePlanetDetail = {
  planets: {
    [id: string]: {
      expired: number;
      planet: Planet;
    };
  };
  id: string | null;
  loading: boolean;
  error: {
    detail: string;
  } | null;
};

const initialState: StatePlanetDetail = {
  planets: {},
  id: null,
  loading: false,
  error: null,
};

const handlers: Handler<StatePlanetDetail, ActionPlanetDetail> = {
  [PLANET_DETAIL_REQUEST]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  [PLANET_DETAIL_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [PLANET_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    planets: {
      ...state.planets,
      [action.payload.id]: {
        expired: action.payload.expired,
        planet: action.payload.planet,
      },
    },
  }),
  DEFAULT: (state) => state,
};

export const planetDetailReducer: Reducer<
  StatePlanetDetail,
  | ActionPlanetDetailRequest
  | ActionPlanetDetailSuccess
  | ActionPlanetDetailFailure
> = (state = initialState, action) => CreateReducer(handlers, state, action);
