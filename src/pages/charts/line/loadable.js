import React from "react";
import Loadable from "react-loadable";
import { LineWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <LineWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </LineWrapper>
    );
  }
});

export default () => <LoadableComponent />;
