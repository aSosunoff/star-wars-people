import React from "react";
import { CardProps } from "antd";

import { Person } from "../../app/interfaces/person";
import { useSelector } from "react-redux";
import { selectorPlanetDetail } from "./selectors/selector-planet-detail";
import { PlanetDetail } from "./components/planet-detail";

export interface PeopleDetailPageProps extends Pick<CardProps, "loading"> {
  person: Person | null;
}

export const PeopleDetailPage: React.FC<PeopleDetailPageProps> = () => {
  const { planet, loading } = useSelector(selectorPlanetDetail);

  return (
    <PlanetDetail title="Person detail" planet={planet} loading={loading} />
  );
};
