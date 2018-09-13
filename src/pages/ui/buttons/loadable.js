import React from "react";
import Loadable from "react-loadable";
import { BtnWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <BtnWrapper>
        <Spin tip="Loading..." className="loading" size='large'/>
      </BtnWrapper>
    );
  }
});

export default () => <LoadableComponent />;
