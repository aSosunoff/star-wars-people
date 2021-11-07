import React from "react";
import { Card, CardProps, Col, Row, Typography } from "antd";

import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { Planet } from "../../../app/interfaces/planet";

export interface PlanetDetailProps
  extends Pick<CardProps, "loading" | "title"> {
  planet: Planet | null;
}

export const PlanetDetail: React.FC<PlanetDetailProps> = ({
  planet,
  loading,
  title,
}) => {
  return (
    <Card title={title} loading={loading}>
      {planet &&
        Object.entries(planet)
          .filter(([, value]) => typeof value !== "object")
          .map(([key, value], index) => (
            <Row key={index}>
              <Col span={12}>
                <Typography.Title level={5}>
                  {key
                    .replace(/_/g, " ")
                    .split(" ")
                    .map(capitalizeFirstLetter)
                    .join(" ")}
                </Typography.Title>
              </Col>

              <Col span={12}>{value}</Col>
            </Row>
          ))}
    </Card>
  );
};
