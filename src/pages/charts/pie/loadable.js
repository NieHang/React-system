import React from "react";
import Loadable from "react-loadable";
import { PieWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <PieWrapper>
        <img src="../../../static/loading.gif" alt="" />
      </PieWrapper>
    );
  }
});

export default () => <LoadableComponent />;
