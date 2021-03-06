import { RouteProps } from "react-router-dom";
import { NotFound } from "../../feature/not-found";
import { People } from "../../feature/people";
import { PeopleDetailPage } from "../../feature/people-detail";
import { PlanetDetailPage } from "../../feature/planet-detail";

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
    component: PeopleDetailPage,
  },
  {
    path: Path.PlanetDetail,
    exact: true,
    component: PlanetDetailPage,
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
