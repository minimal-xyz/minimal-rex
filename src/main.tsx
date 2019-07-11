import { RexProvider } from "@jimengio/rex";
import React from "react";
import ReactDOM from "react-dom";
import { globalStore } from "./store";
import Container from "./view";

const renderApp = () => {
  ReactDOM.render(
    <RexProvider value={globalStore}>
      <Container />
    </RexProvider>,
    document.querySelector(".app")
  );
};

window.onload = () => {
  renderApp();
  globalStore.subscribe(renderApp);
};
