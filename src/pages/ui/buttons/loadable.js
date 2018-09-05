import React from "react";
import Loadable from "react-loadable";
import { BtnWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <BtnWrapper><img src="../../../static/loading.gif" alt=""/></BtnWrapper>;
  }
});

export default () => <LoadableComponent />;
