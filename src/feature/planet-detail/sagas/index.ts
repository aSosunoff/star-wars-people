import { takeEvery, fork } from "redux-saga/effects";
import { ActionPlanetDetailRequest, PLANET_DETAIL_REQUEST } from "../action";
import { loadPlanetDetail } from "./loadPlanetDetail";
import { watchRoutePlanetDetail } from "./watchRoutePlanetDetail";

export function* planetDetailSaga() {
  yield fork(watchRoutePlanetDetail);

  yield takeEvery<ActionPlanetDetailRequest>(
    PLANET_DETAIL_REQUEST,
    loadPlanetDetail
  );
}
