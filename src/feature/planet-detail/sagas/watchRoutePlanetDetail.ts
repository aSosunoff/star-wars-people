import { take, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { matchPath } from "react-router-dom";

import { Path } from "../../../app/router/path-constant";
import { getRouteConfig } from "../../../app/router/routes-config";
import { ActionPlanetDetailRequest, PLANET_DETAIL_REQUEST } from "../action";

export function* watchRoutePlanetDetail() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    const planetDetail = getRouteConfig(Path.PlanetDetail);

    if (
      planetDetail &&
      matchPath(action.payload.location.pathname, planetDetail)
    ) {
      const config = matchPath<{
        id: string;
      }>(action.payload.location.pathname, planetDetail);

      if (config) {
        const {
          params: { id },
        } = config;

        yield put<ActionPlanetDetailRequest>({
          type: PLANET_DETAIL_REQUEST,
          payload: { id },
        });
      }
    }
  }
}
