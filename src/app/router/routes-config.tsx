import { RouteProps } from "react-router-dom";
import { NotFound } from "../../feature/not-found";
import { People } from "../../feature/people";
import { PeopleDetail } from "../../feature/people-detail";
import { Planets } from "../../feature/planets";
import { Path } from "./path-constant";

export const routesConfig: RouteProps[] = [
  {
    path: Path.Main,
    exact: true,
    component: People,
  },
  {
    path: Path.People,
    exact: true,
    component: People,
  },
  {
    path: Path.PeopleDetail,
    exact: true,
    component: PeopleDetail,
  },
  {
    path: Path.Planets,
    exact: true,
    component: Planets,
  },
  {
    path: "*",
    exact: true,
    component: NotFound,
  },
];

export const getRouteConfig = (path: Path) =>
  routesConfig.find((config) => path === config.path);
