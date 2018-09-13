import React from "react";
import Loadable from "react-loadable";
import { NoteWrapper } from "./style";
import { Spin } from "antd";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return (
      <NoteWrapper>
        <Spin tip="Loading..." className="loading" size="large" />
      </NoteWrapper>
    );
  }
});

export default () => <LoadableComponent />;
