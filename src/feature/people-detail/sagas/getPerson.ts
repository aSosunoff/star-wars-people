import moment from "moment";
import { select } from "redux-saga/effects";
import { StateRoot } from "../../../app/redux/reducers";
import { selectorPeopleDetail } from "../selectors/selector-people-detail";

export function* getPerson(id: string) {
  const { persons }: StateRoot["peopleDetail"] = yield select(
    selectorPeopleDetail
  );

  const person = persons[id];

  if (!person) {
    return null;
  }

  return moment(person.expired).toDate().getTime() < moment().toDate().getTime()
    ? null
    : person;
}
