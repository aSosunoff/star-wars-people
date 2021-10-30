import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import { configureStore } from "./app/redux";
import { App } from "./app";
import { ConfigProvider } from "antd";
import "./index.less";

import ru_RU from "antd/lib/locale/ru_RU";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

export const history = createBrowserHistory();

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={ru_RU}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
