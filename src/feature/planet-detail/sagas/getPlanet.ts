import moment from "moment";
import { select } from "redux-saga/effects";
import { StateRoot } from "../../../app/redux/reducers";
import { selectorPlanetDetail } from "../selectors/selector-planet-detail";

export function* getPlanet(id: string) {
  const { planets }: StateRoot["planetDetail"] = yield select(
    selectorPlanetDetail
  );

  const planet = planets[id];

  if (!planet) {
    return null;
  }

  return moment(planet.expired).toDate().getTime() < moment().toDate().getTime()
    ? null
    : planet;
}
