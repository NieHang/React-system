import React from "react";
import Loadable from "react-loadable";
import { OrderWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <OrderWrapper>
        <img src="../../../static/loading.gif" alt="" />
      </OrderWrapper>
    );
  }
});

export default () => <LoadableComponent />;
