import { useSelector } from "react-redux";
import { Table } from "antd";
import { useDispatchPlanetsRequest } from "../dispatch/use-dispatch-planets-request";
import { selectorPlanets } from "../selectors/selector-planets";
import { v4 } from "uuid";
import moment from "moment";

export const TablePlanets: React.FC = () => {
  const { pageData, page, pageSize, loading, search } =
    useSelector(selectorPlanets);

  const { dispatchPlanetsRequest } = useDispatchPlanetsRequest();

  return (
    <Table
      loading={loading}
      rowKey={() => v4()}
      columns={[
        { dataIndex: "name", title: "Name" },
        { dataIndex: "climate", title: "Climate" },
        {
          dataIndex: "edited",
          title: "Edited",
          render: (edited) => moment(edited).format("DD.MM.YYYY HH:MM:SS"),
        },
        { dataIndex: "gravity", title: "Gravity" },
        { dataIndex: "orbital_period", title: "Orbital Period" },
        { dataIndex: "population", title: "Population" },
      ]}
      dataSource={pageData?.results ?? []}
      pagination={{
        position: ["bottomLeft"],
        current: page,
        pageSize,
        total: pageData?.count ?? 0,
        showSizeChanger: false,
      }}
      onChange={(page) => {
        dispatchPlanetsRequest(page?.current ?? 1, search);
      }}
    />
  );
};
