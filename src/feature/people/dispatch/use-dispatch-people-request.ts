import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionPeopleRequest, PEOPLE_REQUEST } from "../action";

export const useDispatchPeopleRequest = () => {
  const dispatch = useDispatch<Dispatch<ActionPeopleRequest>>();

  const dispatchPeopleRequest = useCallback(
    (page: number, search: string) => {
      dispatch({
        type: PEOPLE_REQUEST,
        payload: {
          page,
          search,
        },
      });
    },
    [dispatch]
  );

  return { dispatchPeopleRequest };
};
