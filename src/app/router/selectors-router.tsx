import { StateRoot } from "../redux/reducers";

export const selectorPathName = (state: StateRoot) =>
  state.router.location.pathname;

export const selectorLocation = (state: StateRoot) => state.router.location;
