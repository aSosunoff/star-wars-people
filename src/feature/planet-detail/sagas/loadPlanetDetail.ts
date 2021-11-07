import { Planet } from "./../../../app/interfaces/planet";
import moment from "moment";
import { call, put } from "redux-saga/effects";

import { StateRoot } from "../../../app/redux/reducers";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPlanetDetailFailure,
  ActionPlanetDetailRequest,
  ActionPlanetDetailSuccess,
  PLANET_DETAIL_FAILURE,
  PLANET_DETAIL_SUCCESS,
} from "../action";
import { getPlanet } from "./getPlanet";

export function* loadPlanetDetail({
  payload: { id },
}: ActionPlanetDetailRequest) {
  try {
    const planet: StateRoot["planetDetail"]["planets"][any] | null = yield call(
      getPlanet,
      id
    );

    if (!planet) {
      const data: Planet = yield call(SWAPIService.getPlanetDetail, id);

      yield put<ActionPlanetDetailSuccess>({
        type: PLANET_DETAIL_SUCCESS,
        payload: {
          id,
          planet: data,
          expired: moment().add(2, "m").toDate().getTime(),
        },
      });
    } else {
      yield put<ActionPlanetDetailSuccess>({
        type: PLANET_DETAIL_SUCCESS,
        payload: {
          id,
          planet: planet.planet,
          expired: planet.expired,
        },
      });
    }
  } catch (error: any) {
    yield put<ActionPlanetDetailFailure>({
      type: PLANET_DETAIL_FAILURE,
      payload: error,
    });
  }
}
