import React from "react";
import Loadable from "react-loadable";
import { LineWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <LineWrapper>
        <img src="../../../static/loading.gif" alt="" />
      </LineWrapper>
    );
  }
});

export default () => <LoadableComponent />;
