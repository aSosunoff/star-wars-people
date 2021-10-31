import { take, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { matchPath } from "react-router-dom";

import { Path } from "../../../app/router/path-constant";
import { getRouteConfig } from "../../../app/router/routes-config";
import { ActionPeopleDetailRequest, PEOPLE_DETAIL_REQUEST } from "../action";

export function* watchRoutePeopleDetail() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    const peopleDetail = getRouteConfig(Path.PeopleDetail);

    if (
      peopleDetail &&
      matchPath(action.payload.location.pathname, peopleDetail)
    ) {
      const config = matchPath<{
        id: string;
      }>(action.payload.location.pathname, peopleDetail);

      if (config) {
        const {
          params: { id },
        } = config;

        yield put<ActionPeopleDetailRequest>({
          type: PEOPLE_DETAIL_REQUEST,
          payload: { id },
        });
      }
    }
  }
}
