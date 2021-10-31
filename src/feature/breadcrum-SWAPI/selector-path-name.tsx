import { StateRoot } from "../../app/redux/reducers";

export const selectorPathName = (state: StateRoot) =>
  state.router.location.pathname;
