import React from "react";
import { CardProps } from "antd";

import { Person } from "../../app/interfaces/person";
import { useSelector } from "react-redux";
import { selectorPlanetDetail } from "./selectors/selector-planet-detail";
import { PlanetDetail } from "./components/planet-detail";

export interface PlanetDetailPageProps extends Pick<CardProps, "loading"> {
  person: Person | null;
}

export const PlanetDetailPage: React.FC<PlanetDetailPageProps> = () => {
  const { planet, loading } = useSelector(selectorPlanetDetail);

  return (
    <PlanetDetail title="Planet detail" planet={planet} loading={loading} />
  );
};
