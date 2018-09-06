import React from "react";
import Loadable from "react-loadable";
import { EnrollWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <EnrollWrapper><img src="../../../static/loading.gif" alt="" /></EnrollWrapper>;
  }
});

export default () => <LoadableComponent />;
