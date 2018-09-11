import React from "react";
import Loadable from "react-loadable";
import { MapWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <MapWrapper>
        <img src="../../../static/loading.gif" alt="" />
      </MapWrapper>
    );
  }
});

export default () => <LoadableComponent />;
