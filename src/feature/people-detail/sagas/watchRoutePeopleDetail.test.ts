import { take, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { watchRoutePeopleDetail } from "./watchRoutePeopleDetail";
import { ActionPeopleDetailRequest, PEOPLE_DETAIL_REQUEST } from "../action";

describe("watchRoutePeopleDetail", () => {
  const idPerson = "1";
  let gen: ReturnType<typeof watchRoutePeopleDetail>;

  beforeEach(() => {
    gen = watchRoutePeopleDetail();
  });

  it("should be expect location change if the path is not the person detail", () => {
    expect(gen.next().value).toEqual(take(LOCATION_CHANGE));

    const action: LocationChangeAction = {
      type: LOCATION_CHANGE,
      payload: {
        location: {
          pathname: "",
        },
      },
    } as LocationChangeAction;

    expect(gen.next(action).value).toEqual(take(LOCATION_CHANGE));
  });

  it("check", () => {
    expect(gen.next().value).toEqual(take(LOCATION_CHANGE));

    const action: LocationChangeAction = {
      type: LOCATION_CHANGE,
      payload: {
        location: {
          pathname: "/people-detail/1",
        },
      },
    } as LocationChangeAction;

    expect(gen.next(action).value).toEqual(
      put<ActionPeopleDetailRequest>({
        type: PEOPLE_DETAIL_REQUEST,
        payload: { id: idPerson },
      })
    );
  });
});
