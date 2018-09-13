import React from "react";
import Loadable from "react-loadable";
import { ModalWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <ModalWrapper>
        <Spin tip="Loading..." className="loading" size="large" />
      </ModalWrapper>
    );
  }
});

export default () => <LoadableComponent />;
