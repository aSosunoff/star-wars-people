import React from "react";
import { CardProps } from "antd";

import { Person } from "../../app/interfaces/person";
import { useSelector } from "react-redux";
import { selectorPeopleDetail } from "./selectors/selector-people-detail";
import { PeopleDetail } from "./components/people-detail";

export interface PeopleDetailPageProps extends Pick<CardProps, "loading"> {
  person: Person | null;
}

export const PeopleDetailPage: React.FC<PeopleDetailPageProps> = () => {
  const { person, loading } = useSelector(selectorPeopleDetail);

  return (
    <PeopleDetail title="Person detail" person={person} loading={loading} />
  );
};
