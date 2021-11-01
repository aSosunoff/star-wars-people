import { StateRoot } from "../../../app/redux/reducers";

export const selectorPeopleDetail = (state: StateRoot) => {
  return {
    ...state.peopleDetail,
    person:
      state.peopleDetail.id && state.peopleDetail.persons[state.peopleDetail.id]
        ? state.peopleDetail.persons[state.peopleDetail.id].person
        : null,
  };
};
