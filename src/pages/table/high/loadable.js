import React from "react";
import Loadable from "react-loadable";
import { HighTableWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <HighTableWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </HighTableWrapper>
    );
  }
});

export default () => <LoadableComponent />;
