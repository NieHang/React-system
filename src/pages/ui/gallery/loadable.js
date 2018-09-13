import React from "react";
import Loadable from "react-loadable";
import { GalleryWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <GalleryWrapper>
        <Spin className="loading" size="large" tip="Loading..." />
      </GalleryWrapper>
    );
  }
});

export default () => <LoadableComponent />;
