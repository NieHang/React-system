import React from "react";
import Loadable from "react-loadable";
import { TabWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <TabWrapper><img src="../../../static/loading.gif" alt="" /></TabWrapper>;
  }
});

export default () => <LoadableComponent />;
