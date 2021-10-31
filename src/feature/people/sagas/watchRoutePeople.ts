import { take, select, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { matchPath } from "react-router-dom";

import { selectorPeople } from "./../selectors/selector-people";
import { Path } from "../../../app/router/path-constant";
import { StateRoot } from "../../../app/redux/reducers";
import { ActionPeopleRequest, PEOPLE_REQUEST } from "../action";
import { getRouteConfig } from "../../../app/router/routes-config";

export function* watchRoutePeople() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    const main = getRouteConfig(Path.Main);

    const people = getRouteConfig(Path.People);

    if (
      (people && matchPath(action.payload.location.pathname, people)) ||
      (main && matchPath(action.payload.location.pathname, main))
    ) {
      const { page, search }: StateRoot["people"] = yield select(
        selectorPeople
      );

      yield put<ActionPeopleRequest>({
        type: PEOPLE_REQUEST,
        payload: { page, search },
      });
    }
  }
}
