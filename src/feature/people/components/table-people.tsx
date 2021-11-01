import { useSelector } from "react-redux";
import { Button, Table } from "antd";
import { EyeOutlined, UserOutlined } from "@ant-design/icons";
import { v4 } from "uuid";
import moment from "moment";

import { useDispatchPeopleRequest } from "../dispatch/use-dispatch-people-request";
import { selectorPeople } from "../selectors/selector-people";
import { Person } from "../../../app/interfaces/person";
import { Link } from "react-router-dom";
import { Path } from "../../../app/router/path-constant";
import { setParameter } from "../../../app/router/set-parameter";
import { getIdUserFromUrl } from "../../../app/utils/getIdUserFromUrl";
import { useModalPersonDetail } from "../../people-detail/components/modal-person-detail/use-modal-person-detail";

export const TablePeople: React.FC = () => {
  const { pageData, page, pageSize, loading, search } =
    useSelector(selectorPeople);

  const { dispatchPeopleRequest } = useDispatchPeopleRequest();

  const [ModalPersonDetail, { showHandler }] = useModalPersonDetail();

  return (
    <>
      {ModalPersonDetail}

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
          {
            dataIndex: "url",
            render: (url: Person["url"]) => (
              <Button
                shape="circle"
                icon={<EyeOutlined />}
                onClick={() => {
                  showHandler(getIdUserFromUrl(url));
                }}
                type="ghost"
              />
            ),
          },
          {
            dataIndex: "url",
            render: (url: Person["url"]) => (
              <Link
                to={setParameter(Path.PeopleDetail, {
                  ":id": getIdUserFromUrl(url),
                })}
              >
                <Button shape="circle" icon={<UserOutlined />} type="primary" />
              </Link>
            ),
          },
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
          dispatchPeopleRequest(page?.current ?? 1, search);
        }}
      />
    </>
  );
};
