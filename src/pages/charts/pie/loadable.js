import React from "react";
import Loadable from "react-loadable";
import { PieWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <PieWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </PieWrapper>
    );
  }
});

export default () => <LoadableComponent />;
