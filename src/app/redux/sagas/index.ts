import { spawn, call, all } from "redux-saga/effects";
import { peopleDetailSaga } from "../../../feature/people-detail/sagas";
import { peopleSaga } from "../../../feature/people/sagas";
import { planetDetailSaga } from "../../../feature/planet-detail/sagas";
import { planetsSaga } from "../../../feature/planets/sagas";

export function* rootSaga() {
  const sagas = [peopleSaga, planetsSaga, peopleDetailSaga, planetDetailSaga];

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
