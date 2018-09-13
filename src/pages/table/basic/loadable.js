import React from "react";
import Loadable from "react-loadable";
import { BasicTableWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <BasicTableWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </BasicTableWrapper>
    );
  }
});

export default () => <LoadableComponent />;
