import React from "react";
import { Route, Switch } from "react-router-dom";
import { routesConfig } from "./routes-config";

export interface RouterProps {}

export const Router: React.FC<RouterProps> = () => (
  <Switch>
    {routesConfig.map((route) => (
      <Route key={route.path as string} {...route} />
    ))}
  </Switch>
);
