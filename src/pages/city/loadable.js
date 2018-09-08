import React from "react";
import Loadable from "react-loadable";
import { CityWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <CityWrapper><img src="../../../static/loading.gif" alt="" /></CityWrapper>;
  }
});

export default () => <LoadableComponent />;
