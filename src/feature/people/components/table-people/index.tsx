import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { Table } from "antd";

import { useDispatchPeopleRequest } from "../../dispatch/use-dispatch-people-request";
import { selectorPeople } from "../../selectors/selector-people";
import { useModalPersonDetail } from "../../../people-detail/components/modal-person-detail/use-modal-person-detail";
import { useColumnsPeople } from "./use-columns-people";

export const TablePeople: React.FC = () => {
  const { pageData, page, pageSize, loading, search } =
    useSelector(selectorPeople);

  const { dispatchPeopleRequest } = useDispatchPeopleRequest();

  const [ModalPersonDetail, { showHandler }] = useModalPersonDetail();

  const columns = useColumnsPeople(showHandler);

  return (
    <>
      {ModalPersonDetail}

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
          dispatchPeopleRequest(page?.current ?? 1, search);
        }}
      />
    </>
  );
};
