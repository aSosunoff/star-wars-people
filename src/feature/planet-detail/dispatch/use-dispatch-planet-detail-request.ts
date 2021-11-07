import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionPlanetDetailRequest, PLANET_DETAIL_REQUEST } from "../action";

export const useDispatchPlanetDetailRequest = () => {
  const dispatch = useDispatch<Dispatch<ActionPlanetDetailRequest>>();

  const dispatchPlanetDetailRequest = useCallback(
    (id: string) => {
      dispatch({
        type: PLANET_DETAIL_REQUEST,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  return { dispatchPlanetDetailRequest };
};
