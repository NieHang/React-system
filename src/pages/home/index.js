import React, { PureComponent } from "react";
import { HomeWrapper } from "./style";
import { emojify } from "react-emojione";

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        {emojify("Easy! :wink: ")}
      </HomeWrapper>
    );
  }
}
