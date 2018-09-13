import React from "react";
import Loadable from "react-loadable";
import { LoginWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <LoginWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </LoginWrapper>
    );
  }
});

export default () => <LoadableComponent />;
