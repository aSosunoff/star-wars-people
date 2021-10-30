import React from "react";
import { Row, Col } from "antd";
import { SearchPeopleByName } from "./components/search-people-by-name";
import { TablePeople } from "./components/table-people";

export interface PeopleProps {}

export const People: React.FC<PeopleProps> = () => {
  return (
    <Row gutter={[15, 15]}>
      <Col span={10}>
        <SearchPeopleByName />
      </Col>

      <Col span={24}>
        <TablePeople />
      </Col>
    </Row>
  );
};
