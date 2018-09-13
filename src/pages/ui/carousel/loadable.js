import React from "react";
import Loadable from "react-loadable";
import { CarouselWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <CarouselWrapper>
        <Spin tip="Loading..." className="loading" size="large" />
      </CarouselWrapper>
    );
  }
});

export default () => <LoadableComponent />;
