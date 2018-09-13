import React from "react";
import Loadable from "react-loadable";
import { TabWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <TabWrapper>
        <Spin tip="Loading..." className="loading" size="large" />
      </TabWrapper>
    );
  }
});

export default () => <LoadableComponent />;
