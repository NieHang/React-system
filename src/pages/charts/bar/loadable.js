import React from "react";
import Loadable from "react-loadable";
import { BarWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <BarWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </BarWrapper>
    );
  }
});

export default () => <LoadableComponent />;
