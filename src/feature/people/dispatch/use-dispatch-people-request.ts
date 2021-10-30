import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionPeopleRequest, typePeopleRequest } from "../action";

export const useDispatchPeopleRequest = () => {
  const dispatch = useDispatch<Dispatch<ActionPeopleRequest>>();

  const dispatchPepleRequest = useCallback(
    (page: number, search: string) => {
      dispatch({
        type: typePeopleRequest,
        payload: {
          page,
          search,
        },
      });
    },
    [dispatch]
  );

  return { dispatchPepleRequest };
};
