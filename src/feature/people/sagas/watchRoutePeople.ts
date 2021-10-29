import { take, fork } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { Path } from "../../../app/router/path-constant";
import { loadPeopleList } from "./loadPeopleList";

export function* watchRoutePeople() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    if (
      [Path.Main, Path.People].includes(
        action.payload.location.pathname as Path
      )
    ) {
      yield fork(loadPeopleList);
    }
  }
}
