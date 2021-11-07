import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import { peopleReducer } from "../../../feature/people/reducer";
import { planetsReducer } from "../../../feature/planets/reducer";
import { peopleDetailReducer } from "../../../feature/people-detail/reducer";
import { planetDetailReducer } from "../../../feature/planet-detail/reducer";

export const createRootReducer = (history: History) =>
  combineReducers({
    people: peopleReducer,
    peopleDetail: peopleDetailReducer,
    planets: planetsReducer,
    planetDetail: planetDetailReducer,
    router: connectRouter(history),
  });

export type StateRoot = ReturnType<ReturnType<typeof createRootReducer>>;
