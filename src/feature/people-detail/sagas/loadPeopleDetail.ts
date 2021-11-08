import moment from "moment";
import { call, put } from "redux-saga/effects";

import { Person } from "../../../app/interfaces/person";
import { StateRoot } from "../../../app/redux/reducers";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPeopleDetailFailure,
  ActionPeopleDetailRequest,
  ActionPeopleDetailSuccess,
  PEOPLE_DETAIL_FAILURE,
  PEOPLE_DETAIL_SUCCESS,
} from "../action";
import { getPerson } from "./getPerson";

export function* loadPeopleDetail({ payload: { id } }: ActionPeopleDetailRequest) {
  try {
    const person: StateRoot["peopleDetail"]["persons"][any] | null = yield call(getPerson, id);

    if (!person) {
      const data: Person = yield call(SWAPIService.getPeopleDetail, id);

      yield put<ActionPeopleDetailSuccess>({
        type: PEOPLE_DETAIL_SUCCESS,
        payload: {
          id,
          person: data,
          expired: moment().add(2, "m").toDate().getTime(),
        },
      });
    } else {
      yield put<ActionPeopleDetailSuccess>({
        type: PEOPLE_DETAIL_SUCCESS,
        payload: {
          id,
          person: person.person,
          expired: person.expired,
        },
      });
    }
  } catch (error: any) {
    yield put<ActionPeopleDetailFailure>({
      type: PEOPLE_DETAIL_FAILURE,
      payload: error,
    });
  }
}
