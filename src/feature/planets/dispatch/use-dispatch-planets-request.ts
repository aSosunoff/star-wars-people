import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionPlanetsRequest, PLANETS_REQUEST } from "../action";

export const useDispatchPlanetsRequest = () => {
  const dispatch = useDispatch<Dispatch<ActionPlanetsRequest>>();

  const dispatchPlanetsRequest = useCallback(
    (page: number, search: string) => {
      dispatch({
        type: PLANETS_REQUEST,
        payload: {
          page,
          search,
        },
      });
    },
    [dispatch]
  );

  return { dispatchPlanetsRequest };
};
