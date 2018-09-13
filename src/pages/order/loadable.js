import React from "react";
import Loadable from "react-loadable";
import { OrderWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <OrderWrapper>
        <Spin size="large" className="loading" tip="Loading..." />
      </OrderWrapper>
    );
  }
});

export default () => <LoadableComponent />;
