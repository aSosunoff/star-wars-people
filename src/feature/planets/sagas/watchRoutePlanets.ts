import { take, /* select, */ put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { matchPath } from "react-router-dom";

/* import { selectorPlanets } from "./../selectors/selector-planets";
import { StateRoot } from "../../../app/redux/reducers"; */
import { Path } from "../../../app/router/path-constant";
import { ActionPlanetsRequest, PLANETS_REQUEST } from "../action";
import { getRouteConfig } from "../../../app/router/routes-config";

export function* watchRoutePlanets() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    const planets = getRouteConfig(Path.Planets);

    if (planets && matchPath(action.payload.location.pathname, planets)) {
      /* const { page, search }: StateRoot["planets"] = yield select(
        selectorPlanets
      ); */

      yield put<ActionPlanetsRequest>({
        type: PLANETS_REQUEST,
        payload: { page: 1, search: "" },
      });
    }
  }
}
