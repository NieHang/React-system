import React from "react";
import Loadable from "react-loadable";
import { PermissionWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <PermissionWrapper>
        <Spin tip="Loading" className='loading' size='large'/>
      </PermissionWrapper>
    );
  }
});

export default () => <LoadableComponent />;
