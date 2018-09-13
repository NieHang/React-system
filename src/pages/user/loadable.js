import React from "react";
import Loadable from "react-loadable";
import { UserWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <UserWrapper>
        <Spin className="loading" tip="Loading..." size="large" />
      </UserWrapper>
    );
  }
});

export default () => <LoadableComponent />;
