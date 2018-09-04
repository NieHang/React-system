import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleString()
    };
  }

  render() {
    const { username, pageName } = this.props;
    return (
      <HeaderWrapper>
        <div className="header_user">
          <span>欢迎, {username}</span>
          <span>退出</span>
        </div>
        <div className="header_info">
          <span className="pageName">{pageName}</span>
          <span className="time">{this.state.time}</span>
        </div>
      </HeaderWrapper>
    );
  }

  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.setState(() => {
        return { time: new Date().toLocaleString() };
      });
    }, 1000);
  };
}

const mapState = state => ({
  username: state.getIn(["header", "username"]),
  pageName: state.getIn(["header", "pageName"])
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(Header);
