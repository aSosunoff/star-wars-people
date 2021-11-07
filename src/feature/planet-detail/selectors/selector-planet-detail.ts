import { StateRoot } from "../../../app/redux/reducers";

export const selectorPlanetDetail = (state: StateRoot) => {
  return {
    ...state.planetDetail,
    planet:
      state.planetDetail.id && state.planetDetail.planets[state.planetDetail.id]
        ? state.planetDetail.planets[state.planetDetail.id].planet
        : null,
  };
};
