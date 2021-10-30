import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import { configureStore } from "./app/redux";
import { Router } from "./app/router";

import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import moment from "moment";
import "moment/locale/ru";
import "./index.less";

moment.locale("ru");

export const history = createBrowserHistory();

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={ru_RU}>
        <Router />
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
