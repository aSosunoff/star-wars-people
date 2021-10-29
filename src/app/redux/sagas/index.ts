import { spawn, call, all, take, fork, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { SWAPIService } from "../../services/SWAPIService";
import { PagesType } from "../../interfaces.ts/pages-type";
import { Person } from "../../interfaces.ts/person";
import {
  ActionPeaoleFailure,
  ActionPeopleRequest,
  ActionPeopleSuccess,
} from "../../../feature/people/reducer";
import { Path } from "../../router/path-constant";

function* loadPeopleList() {
  yield put<ActionPeopleRequest>({
    type: "REQUEST",
  });

  try {
    const pageData: PagesType<Person> = yield call(SWAPIService.getPeople);

    yield put<ActionPeopleSuccess>({
      type: "SUCCESS",
      payload: pageData,
    });
  } catch (error: any) {
    yield put<ActionPeaoleFailure>({
      type: "FAILURE",
      payload: error,
    });
  }
}

function* watchRoute() {
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

export function* rootSaga() {
  const sagas = [watchRoute];

  const retrySagas = sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error: any) {
          console.log(error);
        }
      }
    })
  );

  yield all(retrySagas);
}
