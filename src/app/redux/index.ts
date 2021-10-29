import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import { createRootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import { History } from "history";

export const configureStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware();

  const historyMiddleware = routerMiddleware(history);

  const enhancer = applyMiddleware(historyMiddleware, sagaMiddleware);

  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(enhancer)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
