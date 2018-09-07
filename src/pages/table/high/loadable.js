import React from "react";
import Loadable from "react-loadable";
import { HighTableWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <HighTableWrapper>
        <img src="../../../static/loading.gif" alt="" />
      </HighTableWrapper>
    );
  }
});

export default () => <LoadableComponent />;
