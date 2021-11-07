import { useSelector } from "react-redux";
import { Table } from "antd";
import { v4 } from "uuid";

import { useDispatchPlanetsRequest } from "../../dispatch/use-dispatch-planets-request";
import { selectorPlanets } from "../../selectors/selector-planets";
import { useColumnsPlanet } from "./use-columns-planet";
import { useModalPlanetDetail } from "../../../planet-detail/components/modal-planet-detail/use-modal-planet-detail";

export const TablePlanets: React.FC = () => {
  const { pageData, page, pageSize, loading, search } =
    useSelector(selectorPlanets);

  const { dispatchPlanetsRequest } = useDispatchPlanetsRequest();

  const [ModalPlanetDetail, { showHandler }] = useModalPlanetDetail();

  const columns = useColumnsPlanet(showHandler);

  return (
    <>
      {ModalPlanetDetail}

      <Table
        loading={loading}
        rowKey={() => v4()}
        columns={columns}
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
    </>
  );
};
