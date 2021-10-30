import { useSelector } from "react-redux";
import { Table } from "antd";
import { useDispatchPeopleRequest } from "../dispatch/use-dispatch-people-request";
import { selectorPeople } from "../selectors/selector-people";
import { v4 } from "uuid";
import moment from "moment";

export const TablePeople: React.FC = () => {
  const { pageData, page, loading, search } = useSelector(selectorPeople);

  const { dispatchPepleRequest } = useDispatchPeopleRequest();

  return (
    <Table
      loading={loading}
      rowKey={() => v4()}
      columns={[
        { dataIndex: "name", title: "Name" },
        { dataIndex: "birth_year", title: "Birth Year" },
        {
          dataIndex: "edited",
          title: "Edited",
          render: (edited) => moment(edited).format("DD.MM.YYYY HH:MM:SS"),
        },
        { dataIndex: "eye_color", title: "Eye Color" },
        { dataIndex: "gender", title: "Gender" },
        { dataIndex: "hair_color", title: "Hair Color" },
      ]}
      dataSource={pageData?.results ?? []}
      pagination={{
        position: ["bottomLeft"],
        current: page,
        pageSize: 10,
        total: pageData?.count ?? 0,
        showSizeChanger: false,
      }}
      onChange={(page) => {
        dispatchPepleRequest(page?.current ?? 1, search);
      }}
    />
  );
};
