import React, { Component } from "react";
import { HomeWrapper } from "./style";
import { emojify } from "react-emojione";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        {emojify("Easy! :wink: ")}
      </HomeWrapper>
    );
  }
}
