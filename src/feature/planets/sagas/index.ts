import { takeEvery, fork } from "redux-saga/effects";
import { ActionPlanetsRequest, PLANETS_REQUEST } from "../action";
import { loadPlanetsList } from "./loadPlanetsList";
import { watchRoutePlanets } from "./watchRoutePlanets";

export function* planetsSaga() {
  yield fork(watchRoutePlanets);

  yield takeEvery<ActionPlanetsRequest>(PLANETS_REQUEST, loadPlanetsList);
}
