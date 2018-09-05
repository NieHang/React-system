import React from "react";
import Loadable from "react-loadable";
import { CarouselWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <CarouselWrapper><img src="../../../static/loading.gif" alt="" /></CarouselWrapper>;
  }
});

export default () => <LoadableComponent />;
