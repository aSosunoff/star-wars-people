import { selectorPeople } from "./../selectors/selector-people";
import { take, select, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { Path } from "../../../app/router/path-constant";
import { StateRoot } from "../../../app/redux/reducers";
import { ActionPeopleRequest, typePeopleRequest } from "../action";

export function* watchRoutePeople() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    if (
      [Path.Main, Path.People].includes(
        action.payload.location.pathname as Path
      )
    ) {
      const { page, search }: StateRoot["people"] = yield select(
        selectorPeople
      );

      yield put<ActionPeopleRequest>({
        type: typePeopleRequest,
        payload: { page, search },
      });
    }
  }
}
