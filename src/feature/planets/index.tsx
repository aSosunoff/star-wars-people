import React from "react";
import { Row, Col } from "antd";
import { TablePlanets } from "./components/table-planets";
import { SearchPlanetsByName } from "./components/search-planets-by-name";

export interface PlanetsProps {}

export const Planets: React.FC<PlanetsProps> = () => {
  return (
    <Row gutter={[15, 15]}>
      <Col span={10}>
        <SearchPlanetsByName />
      </Col>

      <Col span={24}>
        <TablePlanets />
      </Col>
    </Row>
  );
};
