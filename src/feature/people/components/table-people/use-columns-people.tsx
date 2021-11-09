import { EyeOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Person } from "../../../../app/interfaces/person";
import { Path } from "../../../../app/router/path-constant";
import { setParameter } from "../../../../app/router/set-parameter";
import { getIdFromUrl } from "../../../../app/utils/getIdFromUrl";

const COLUMNS: ColumnsType<Person> = [
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
];

export const useColumnsPeople = (showPesronDetail: (idPrson: string) => void) => {
  const columns = useMemo<ColumnsType<Person>>(
    () => [
      ...COLUMNS,
      {
        dataIndex: "url",
        render: (url: Person["url"]) => (
          <Button
            shape="circle"
            data-cypress="open-modal-person-detail"
            icon={<EyeOutlined />}
            onClick={() => {
              showPesronDetail(getIdFromUrl(url));
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
              ":id": getIdFromUrl(url),
            })}
          >
            <Button
              shape="circle"
              data-cypress="open-page-person-detail"
              icon={<UserOutlined />}
              type="primary"
            />
          </Link>
        ),
      },
    ],
    [showPesronDetail]
  );

  return columns;
};
