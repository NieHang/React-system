import React from "react";
import Loadable from "react-loadable";
import { PermissionWrapper } from "./style";
import loadingImg from '../../static/loading.gif';

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <PermissionWrapper>
        <img src={loadingImg} alt="" />
      </PermissionWrapper>
    );
  }
});

export default () => <LoadableComponent />;
