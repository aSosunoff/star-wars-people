import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import { configureStore } from "./app/redux";
import { PeopleDetail } from "./feature/people-detail";
import { NotFound } from "./feature/not-found";
import { People } from "./feature/people";

export const history = createBrowserHistory();

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={People} />

        <Route path="/people" exact component={People} />

        <Route path="/people-detail" exact component={PeopleDetail} />

        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
