import React, { PureComponent } from "react";
import { Card, Button, Select, DatePicker, Table, Modal, Spin } from "antd";
import { connect } from "react-redux";
import { OrderWrapper } from "./style";
import { actionCreators } from "./store";
import locale from "antd/lib/date-picker/locale/zh_CN";

class Order extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: "杭州",
      time: "",
      status: "全部",
      visible: false
    };
  }

  render() {
    const { city, status } = this.state;
    const Option = Select.Option;
    const { RangePicker } = DatePicker;
    const { columns, data } = this.props;
    let Load;
    if (data.size === 0) {
      Load = <Spin className="loading" size="large" tip="Loading..." />;
    } else {
      Load = (
        <Table
          bordered
          columns={[...columns.toJS()]}
          dataSource={[...data]}
          rowSelection={{ type: "radio" }}
          style={{ x: 1200 }}
        />
      );
    }

    return (
      <OrderWrapper>
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
        <Card
          title={
            <div>
              <Button type="primary" onClick={this.orderInfo.bind(this)}>
                订单详情
              </Button>
              <Button type="primary" onClick={this.stopOrder.bind(this)}>
                结束订单
              </Button>
            </div>
          }
        >
          {Load}
        </Card>
      </OrderWrapper>
    );
  }
  componentDidMount = () => {
    this.props.getData();
  };

  orderInfo() {
    return;
  }

  stopOrder() {
    Modal.info().update({
      title: "温馨提示",
      content: "该订单行程已结束"
    });
  }

  changCity(value) {
    this.setState(() => ({
      city: value
    }));
  }

  changeStatus(value) {
    this.setState(() => ({
      status: value
    }));
  }

  reset() {
    this.setState(() => ({
      city: "杭州",
      status: "全部",
      time: ""
    }));
  }

  changeTime(time) {
    this.setState(() => ({
      time
    }));
  }
}

const mapState = state => ({
  columns: state.getIn(["order", "columns"]),
  data: state.getIn(["order", "data"])
});

const mapDispatch = dispatch => ({
  getData() {
    dispatch(actionCreators.getData());
  }
});

export default connect(
  mapState,
  mapDispatch
)(Order);
