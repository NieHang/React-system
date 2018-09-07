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
          <audio
            controls="controls"
            autoPlay
            loop
            src="https://hope-data.oss-cn-shenzhen.aliyuncs.com/audio/%E5%BE%90%E5%B8%85%2CPianoKevin%20-%20%E6%98%9F%E9%87%8E%E6%BA%90%20-%20%E6%81%8B%EF%BC%88%E3%80%8A%E9%80%83%E9%81%BF%E5%8F%AF%E8%80%BB%E4%BD%86%E6%9C%89%E7%94%A8%E3%80%8B%E7%89%87%E5%B0%BE%E6%9B%B2-%E9%92%A2%E7%90%B4%E6%9F%94%E6%83%85%E7%89%88%EF%BC%89.mp3?Expires=1536328355&OSSAccessKeyId=TMP.AQFONmT2m33sslvBdMz3dZxIowJ7d-smM3MTL_JHtq9aF9IVACPXsMHyXMsmADAtAhQnxLWXArt9sfkhLElKitADksRVAQIVAL2PFF7fXV6bzllUCL3YJOMlGUwW&Signature=DKvFN6k7T%2FXKCD7GhaSwOKWd738%3D"
          >
            请使用谷歌浏览器
          </audio>
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
