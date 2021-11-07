import { EyeOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Planet } from "../../../../app/interfaces/planet";
import { Path } from "../../../../app/router/path-constant";
import { setParameter } from "../../../../app/router/set-parameter";
import { getIdFromUrl } from "../../../../app/utils/getIdFromUrl";

const COLUMNS: ColumnsType<Planet> = [
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
];

export const useColumnsPlanet = (
  showPlanetDetail: (idPrson: string) => void
) => {
  const columns = useMemo<ColumnsType<Planet>>(
    () => [
      ...COLUMNS,
      {
        dataIndex: "url",
        render: (url: Planet["url"]) => (
          <Button
            shape="circle"
            icon={<EyeOutlined />}
            onClick={() => {
              showPlanetDetail(getIdFromUrl(url));
            }}
            type="ghost"
          />
        ),
      },
      {
        dataIndex: "url",
        render: (url: Planet["url"]) => (
          <Link
            to={setParameter(Path.PeopleDetail, {
              ":id": getIdFromUrl(url),
            })}
          >
            <Button shape="circle" icon={<UserOutlined />} type="primary" />
          </Link>
        ),
      },
    ],
    [showPlanetDetail]
  );

  return columns;
};
