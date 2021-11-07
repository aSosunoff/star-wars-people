import { take, put } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { watchRoutePeople } from "./watchRoutePeople";
import { ActionPeopleRequest, PEOPLE_REQUEST } from "../action";

describe("watchRoutePeople", () => {
  const page = 1;
  const search = "";
  let gen: ReturnType<typeof watchRoutePeople>;

  beforeEach(() => {
    gen = watchRoutePeople();
  });

  it("check", () => {
    expect(gen.next().value).toEqual(take(LOCATION_CHANGE));

    const action: LocationChangeAction = {
      type: LOCATION_CHANGE,
      payload: {
        location: {
          pathname: "/people",
        },
      },
    } as LocationChangeAction;

    expect(gen.next(action).value).toEqual(
      put<ActionPeopleRequest>({
        type: PEOPLE_REQUEST,
        payload: { page, search },
      })
    );
  });
});
