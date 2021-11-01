import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionPeopleDetailRequest, PEOPLE_DETAIL_REQUEST } from "./../action";

export const useDispatchPeopleDetailRequest = () => {
  const dispatch = useDispatch<Dispatch<ActionPeopleDetailRequest>>();

  const dispatchPeopleDetailRequest = useCallback(
    (id: string) => {
      dispatch({
        type: PEOPLE_DETAIL_REQUEST,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  return { dispatchPeopleDetailRequest };
};
