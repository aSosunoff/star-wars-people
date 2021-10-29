import React from "react";
import { Route, Switch } from "react-router-dom";
import { PeopleDetail } from "../../feature/people-detail";
import { NotFound } from "../../feature/not-found";
import { People } from "../../feature/people";
import { Path } from "./path-constant";

export interface RouterProps {}

export const Router: React.FC<RouterProps> = () => (
  <Switch>
    <Route path={Path.Main} exact component={People} />

    <Route path={Path.People} exact component={People} />

    <Route path={Path.PeopleDetail} exact component={PeopleDetail} />

    <Route path="*" component={NotFound} />
  </Switch>
);
