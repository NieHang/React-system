import React from "react";
import Loadable from "react-loadable";
import { LoadWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <LoadWrapper>
        <Spin tip="Loading..." className="loading" size="large" />
      </LoadWrapper>
    );
  }
});

export default () => <LoadableComponent />;
