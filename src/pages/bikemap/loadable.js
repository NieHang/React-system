import React from "react";
import Loadable from "react-loadable";
import { MapWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <MapWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </MapWrapper>
    );
  }
});

export default () => <LoadableComponent />;
