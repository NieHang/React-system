import React from "react";
import Loadable from "react-loadable";
import { GalleryWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <GalleryWrapper><img src="../../../static/loading.gif" alt="" /></GalleryWrapper>;
  }
});

export default () => <LoadableComponent />;
