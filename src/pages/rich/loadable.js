import React from "react";
import Loadable from "react-loadable";
import { RichWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <RichWrapper><img src="../../static/loading.gif" alt="" /></RichWrapper>;
  }
});

export default () => <LoadableComponent />;
