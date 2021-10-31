import { call, put } from "redux-saga/effects";
import { PagesType } from "../../../app/interfaces.ts/pages-type";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPlanetsFailure,
  ActionPlanetsRequest,
  ActionPlanetsSuccess,
  PLANETS_FAILURE,
  PLANETS_SUCCESS,
} from "../action";
import { Planet } from "../../../app/interfaces.ts/planet";

export function* loadPlanetsList({
  payload: { search, page },
}: ActionPlanetsRequest) {
  try {
    const pageData: PagesType<Planet> = yield call(
      SWAPIService.getPlanets,
      page,
      search
    );

    yield put<ActionPlanetsSuccess>({
      type: PLANETS_SUCCESS,
      payload: pageData,
    });
  } catch (error: any) {
    yield put<ActionPlanetsFailure>({
      type: PLANETS_FAILURE,
      payload: error,
    });
  }
}
