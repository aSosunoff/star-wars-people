import React from "react";
import { Card, CardProps, Col, Row, Typography } from "antd";

import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { Person } from "../../../app/interfaces/person";

export interface PeopleDetailProps extends Pick<CardProps, "loading"> {
  person: Person | null;
}

export const PeopleDetail: React.FC<PeopleDetailProps> = ({
  person,
  loading,
}) => {
  return (
    <Card title="Person detail" loading={loading}>
      {person &&
        Object.entries(person)
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
