import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { useDispatchPeopleRequest } from "./dispatch/use-dispatch-people-request";
import { selectorPeople } from "./selectors/selector-people";

export interface PeopleProps {}

export const People: React.FC<PeopleProps> = () => {
  const { pageData, page, loading } = useSelector(selectorPeople);

  const { dispatchPepleRequest } = useDispatchPeopleRequest();

  return (
    <Table
      loading={loading}
      rowKey={() => v4()}
      columns={[
        { dataIndex: "name", title: "Name" },
        { dataIndex: "birth_year", title: "Birth Year" },
      ]}
      dataSource={pageData?.results ?? []}
      pagination={{
        position: ["bottomLeft"],
        current: page,
        pageSize: 10,
        total: pageData?.count ?? 0,
      }}
      onChange={(page) => {
        dispatchPepleRequest(page?.current ?? 1, "");
      }}
    />
  );
};
