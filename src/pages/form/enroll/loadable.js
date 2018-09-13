import React from "react";
import Loadable from "react-loadable";
import { EnrollWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <EnrollWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </EnrollWrapper>
    );
  }
});

export default () => <LoadableComponent />;
