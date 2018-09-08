import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { HeaderWrapper } from "./style";
import { Popover, Button } from "antd";
import { actionCreators } from "./store";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleString()
    };
  }

  render() {
    const { username, pageName, local, weather } = this.props;
    return (
      <HeaderWrapper>
        <div className="header_user">
          <span>欢迎, {username}</span>
          <span>退出</span>
        </div>
        <div className="header_info">
          <span className="pageName">{pageName}</span>
          <div className="time_weather">
            <span className="time">{this.state.time}</span>
            <Popover
              placement="topLeft"
              title={local}
              content={weather}
              arrowPointAtCenter
            >
              <Button>查看天气</Button>
            </Popover>
          </div>
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

    this.props.getLocalWeather();
  };
}

const mapState = state => ({
  username: state.getIn(["header", "username"]),
  pageName: state.getIn(["header", "pageName"]),
  local: state.getIn(["header", "local"]),
  weather: state.getIn(["header", "weather"])
});

const mapDispatch = dispatch => ({
  getLocalWeather() {
    dispatch(actionCreators.changeLocalWeather());
  }
});

export default connect(
  mapState,
  mapDispatch
)(Header);
