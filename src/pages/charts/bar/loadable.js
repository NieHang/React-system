import React from "react";
import Loadable from "react-loadable";
import { BarWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <BarWrapper>
        <img src="../../../static/loading.gif" alt="" />
      </BarWrapper>
    );
  }
});

export default () => <LoadableComponent />;
