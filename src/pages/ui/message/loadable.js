import React from "react";
import Loadable from "react-loadable";
import { MessageWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <MessageWrapper><img src="../../../static/loading.gif" alt=""/></MessageWrapper>;
  }
});

export default () => <LoadableComponent />;
