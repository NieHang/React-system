import React from "react";
import Loadable from "react-loadable";
import { MessageWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <MessageWrapper>
        <Spin tip="Loading..." className="loading" size="large" />
      </MessageWrapper>
    );
  }
});

export default () => <LoadableComponent />;
