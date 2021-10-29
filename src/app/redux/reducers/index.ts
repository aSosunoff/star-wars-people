import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import { peopleReducer } from "../../../feature/people/reducer";

export const createRootReducer = (history: History) =>
  combineReducers({
    people: peopleReducer,
    router: connectRouter(history),
  });

export type StateRoot = ReturnType<ReturnType<typeof createRootReducer>>;
