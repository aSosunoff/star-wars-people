import { Planet } from "../../app/interfaces/planet";
import { CreateAction } from "../../app/redux/reducers/helpers";

export const PLANET_DETAIL_REQUEST = "PLANET_DETAIL_REQUEST";
export type dispatchPlanetDetailRequest = typeof PLANET_DETAIL_REQUEST;
export type ActionPlanetDetailRequest = CreateAction<
  ActionPlanetDetail,
  dispatchPlanetDetailRequest
>;

export const PLANET_DETAIL_SUCCESS = "PLANET_DETAIL_SUCCESS";
export type dispatchPlanetDetailSuccess = typeof PLANET_DETAIL_SUCCESS;
export type ActionPlanetDetailSuccess = CreateAction<
  ActionPlanetDetail,
  dispatchPlanetDetailSuccess
>;

export const PLANET_DETAIL_FAILURE = "PLANET_DETAIL_FAILURE";
export type dispatchPlanetDetailFailure = typeof PLANET_DETAIL_FAILURE;
export type ActionPlanetDetailFailure = CreateAction<
  ActionPlanetDetail,
  dispatchPlanetDetailFailure
>;

export type ActionPlanetDetail = {
  [PLANET_DETAIL_REQUEST]: {
    payload: {
      id: string;
    };
  };
  [PLANET_DETAIL_SUCCESS]: {
    payload: {
      id: string;
      planet: Planet;
      expired: number;
    };
  };
  [PLANET_DETAIL_FAILURE]: { payload: any };
};
