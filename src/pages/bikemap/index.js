import React, { PureComponent } from "react";
import { MapWrapper } from "./style";
import { Card, Button, DatePicker, Select } from "antd";
import locale from "antd/lib/date-picker/locale/zh_CN";
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { city: "杭州", time: "", status: "全部", visible: false };
  }

  render() {
    const { city, status } = this.state;
    const RangePicker = DatePicker.RangePicker;
    const Option = Select.Option;
    return (
      <MapWrapper>
        <Card>
          <span className="info">城市：</span>
          <Select
            defaultValue={city}
            value={city}
            onChange={this.changCity.bind(this)}
          >
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="广州">广州</Option>
            <Option value="深圳">深圳</Option>
            <Option value="杭州">杭州</Option>
          </Select>
          <RangePicker
            locale={locale}
            value={this.state.time}
            onChange={this.changeTime.bind(this)}
          />
          <span className="info">订单状态：</span>
          <Select
            defaultValue={status}
            value={status}
            style={{ width: 200 }}
            onChange={this.changeStatus.bind(this)}
          >
            <Option value="全部">全部</Option>
            <Option value="进行中">进行中</Option>
            <Option value="进行中(临时锁车)">进行中(临时锁车)</Option>
            <Option value="行程结束">行程结束</Option>
          </Select>
          <Button type="primary" onClick={this.props.getData}>
            查询
          </Button>
          <Button onClick={this.reset.bind(this)}>重置</Button>
        </Card>
        <Card>
          共计100辆车
          <div id="mapContainer" style={{ height: 500 }} />
        </Card>
      </MapWrapper>
    );
  }

  componentDidMount = () => {
    this.props.getBikeList();

    const BMap = window.BMap;
    let map = new BMap.Map("mapContainer");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("北京");
    map.enableScrollWheelZoom(true);

    // 创建圆
    let circle = new BMap.Circle(new BMap.Point(116.404, 39.915), 20000, {
      strokeColor: "blue",
      strokeWeight: 2,
      strokeOpacity: 0.5
    });
    map.addOverlay(circle);

    // 获取异步数据：车辆的坐标
    let bike_time = setInterval(() => {
      if (this.props.bike_list.length > 0) {
        // 创建图标
        for (let i = 0; i < this.props.bike_list.length; i++) {
          let pt = new BMap.Point(this.props.bike_list[i][0], this.props.bike_list[i][1]);
          let myIcon = new BMap.Icon("http://imoocms.51purse.com/assets/bike.jpg", new BMap.Size(23, 25));
          myIcon.setImageSize(new BMap.Size(23, 25));
          map.addOverlay(new BMap.Marker(pt, { icon: myIcon }));
        }
        clearInterval(bike_time);
      }
    }, 1000);
  };

  changCity(value) {
    this.setState(() => ({ city: value }));
  }

  changeStatus(value) {
    this.setState(() => ({ status: value }));
  }

  reset() {
    this.setState(() => ({
      city: "杭州",
      status: "全部",
      time: ""
    }));
  }

  changeTime(time) {
    this.setState(() => ({ time }));
  }
}

const mapState = state => ({
  bike_list: state.getIn(['map', 'bike_list'])
});

const mapDispatch = dispatch => ({
  getBikeList() {
    dispatch(actionCreators.getBikeList());
  }
});

export default connect(mapState, mapDispatch)(Map);