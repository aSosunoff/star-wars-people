import { PagesType } from "../../app/interfaces.ts/pages-type";
import { Planet } from "../../app/interfaces.ts/planet";
import { CreateAction } from "../../app/redux/reducers/helpers";

export type ActionPlanets = {
  PLANETS_REQUEST: {
    payload: {
      page: number;
      search: string;
    };
  };
  PLANETS_SUCCESS: { payload: PagesType<Planet> };
  PLANETS_FAILURE: { payload: any };
};

export const PLANETS_REQUEST = "PLANETS_REQUEST";
export type dispatchPlanetsRequest = typeof PLANETS_REQUEST;
export type ActionPlanetsRequest = CreateAction<
  ActionPlanets,
  dispatchPlanetsRequest
>;

export const PLANETS_SUCCESS = "PLANETS_SUCCESS";
export type dispatchPlanetsSuccess = typeof PLANETS_SUCCESS;
export type ActionPlanetsSuccess = CreateAction<
  ActionPlanets,
  dispatchPlanetsSuccess
>;

export const PLANETS_FAILURE = "PLANETS_FAILURE";
export type dispatchPlanetsFalure = typeof PLANETS_FAILURE;
export type ActionPlanetsFailure = CreateAction<
  ActionPlanets,
  dispatchPlanetsFalure
>;
