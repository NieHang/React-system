import React from "react";
import Loadable from "react-loadable";
import { RichWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <RichWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </RichWrapper>
    );
  }
});

export default () => <LoadableComponent />;
