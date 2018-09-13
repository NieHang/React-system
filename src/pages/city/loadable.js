import React from "react";
import Loadable from "react-loadable";
import { CityWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <CityWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </CityWrapper>
    );
  }
});

export default () => <LoadableComponent />;
