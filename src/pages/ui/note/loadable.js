import React from "react";
import Loadable from "react-loadable";
import { NoteWrapper } from "./style";

const LoadableComponent = Loadable({
  loader: () => import("./"),
  loading() {
    return <NoteWrapper><img src="../../../static/loading.gif" alt="" /></NoteWrapper>;
  }
});

export default () => <LoadableComponent />;
