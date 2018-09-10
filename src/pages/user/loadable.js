import React from "react";
import Loadable from "react-loadable";
import { UserWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <UserWrapper><img src="../../../static/loading.gif" alt="" /></UserWrapper>;
  }
});

export default () => <LoadableComponent />;
