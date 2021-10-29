import { spawn, call, all } from "redux-saga/effects";
import { watchRoutePeople } from "../../../feature/people/sagas/watchRoutePeople";

export function* rootSaga() {
  const sagas = [watchRoutePeople];

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
