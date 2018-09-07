import React from "react";
import Loadable from "react-loadable";
import { BasicTableWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <BasicTableWrapper><img src="../../../static/loading.gif" alt="" /></BasicTableWrapper>;
  }
});

export default () => <LoadableComponent />;
