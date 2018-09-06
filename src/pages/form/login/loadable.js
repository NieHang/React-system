import React from "react";
import Loadable from "react-loadable";
import { LoginWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <LoginWrapper><img src="../../../static/loading.gif" alt="" /></LoginWrapper>;
  }
});

export default () => <LoadableComponent />;
