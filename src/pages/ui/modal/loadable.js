import React from "react";
import Loadable from "react-loadable";
import { ModalWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <ModalWrapper><img src="../../../static/loading.gif" alt=""/></ModalWrapper>;
  }
});

export default () => <LoadableComponent />;
