import React from "react";
import Loadable from "react-loadable";
import { LoadWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <LoadWrapper><img src="../../../static/loading.gif" alt=""/></LoadWrapper>;
  }
});

export default () => <LoadableComponent />;
