import { selectorPlanets } from "./../selectors/selector-planets";
import { take, select, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { Path } from "../../../app/router/path-constant";
import { StateRoot } from "../../../app/redux/reducers";
import { ActionPlanetsRequest, PLANETS_REQUEST } from "../action";

export function* watchRoutePlanets() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    if ([Path.Planets].includes(action.payload.location.pathname as Path)) {
      const { page, search }: StateRoot["planets"] = yield select(
        selectorPlanets
      );

      yield put<ActionPlanetsRequest>({
        type: PLANETS_REQUEST,
        payload: { page, search },
      });
    }
  }
}
