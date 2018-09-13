import React, { PureComponent } from "react";
import { Card, Button, Select, Modal, Radio, Table, Spin } from "antd";
import { CityWrapper } from "./style";
import { actionCreators } from "./store";
import { connect } from "react-redux";

class City extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: "杭州",
      defaultValue: "全部",
      mode: "全部",
      opMode: "全部",
      state: "全部",
      visible: false
    };

    this.columns = [
      {
        title: "城市Id",
        dataIndex: "id"
      },
      {
        title: "城市名称",
        dataIndex: "name"
      },
      {
        title: "用车模式",
        dataIndex: "mode"
      },
      {
        title: "营运模式",
        dataIndex: "op_mode"
      },
      {
        title: "授权加盟商",
        dataIndex: "franchisee_name"
      },
      {
        title: "城市管理员",
        dataIndex: "city_admins"
      },
      {
        title: "城市开通时间",
        dataIndex: "open_time"
      },
      {
        title: "操作时间",
        dataIndex: "update_time"
      },
      {
        title: "操作人",
        dataIndex: "sys_user_name"
      }
    ];
  }

  render() {
    const Option = Select.Option;
    const { city, defaultValue, mode, opMode, state, visible } = this.state;
    const RadioGroup = Radio.Group;
    const { data } = this.props;
    let Load;
    if (data.size === 0) {
      Load = <Spin className="loading" size="large" tip="Loading..." />;
    } else {
      Load = <Table bordered columns={this.columns} dataSource={[...data]} />;
    }

    return (
      <CityWrapper>
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
          <span className="info">用车模式：</span>
          <Select
            defaultValue={defaultValue}
            value={mode}
            onChange={this.changMode.bind(this)}
            style={{ width: 200 }}
          >
            <Option value="全部">全部</Option>
            <Option value="指定停车点模式">指定停车点模式</Option>
            <Option value="禁停区模式">禁停区模式</Option>
          </Select>
          <span className="info">营运模式：</span>
          <Select
            defaultValue={defaultValue}
            value={opMode}
            onChange={this.changOpMode.bind(this)}
          >
            <Option value="全部">全部</Option>
            <Option value="加盟">加盟</Option>
            <Option value="自营">自营</Option>
          </Select>
          <span className="info">加盟商授权状态：</span>
          <Select
            defaultValue={defaultValue}
            value={state}
            onChange={this.changState.bind(this)}
          >
            <Option value="全部">全部</Option>
            <Option value="已授权">已授权</Option>
            <Option value="未授权">未授权</Option>
          </Select>
          <Button type="primary" onClick={this.props.getData}>
            查询
          </Button>
          <Button onClick={this.reset.bind(this)}>重置</Button>
        </Card>
        <Card
          title={
            <Button type="primary" onClick={this.openCity.bind(this)}>
              开通城市
            </Button>
          }
        >
          <Modal
            title="开通城市"
            visible={visible}
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)}
          >
            <div style={{ marginBottom: 20 }}>
              选择城市：
              <Select defaultValue={"杭州"}>
                <Option value="北京">北京</Option>
                <Option value="上海">上海</Option>
                <Option value="广州">广州</Option>
                <Option value="深圳">深圳</Option>
                <Option value="杭州">杭州</Option>
              </Select>
            </div>
            <div style={{ marginBottom: 20 }}>
              营运模式：
              <RadioGroup>
                <Radio value="自营">自营</Radio>
                <Radio value="加盟">加盟</Radio>
              </RadioGroup>
            </div>
            <div style={{ marginBottom: 20 }}>
              用车模式：
              <RadioGroup>
                <Radio value="指定停车点模式">指定停车点模式</Radio>
                <Radio value="禁停区模式">禁停区模式</Radio>
              </RadioGroup>
            </div>
          </Modal>
          {Load}
        </Card>
      </CityWrapper>
    );
  }

  openCity() {
    this.setState(() => ({
      visible: true
    }));
  }

  handleOk() {
    this.setState(() => ({
      visible: false
    }));
  }

  handleCancel() {
    this.setState(() => ({
      visible: false
    }));
  }

  changCity(value) {
    this.setState(() => ({
      city: value
    }));
  }
  changMode(value) {
    this.setState(() => ({
      mode: value
    }));
  }
  changOpMode(value) {
    this.setState(() => ({
      opMode: value
    }));
  }
  changState(value) {
    this.setState(() => ({
      state: value
    }));
  }

  reset() {
    this.setState(() => ({
      city: "杭州",
      mode: "全部",
      opMode: "全部",
      state: "全部"
    }));
  }

  componentDidMount = () => {
    this.props.getData();
  };
}

const mapState = state => ({
  data: state.getIn(["city", "data"])
});

const mapDispatch = dispatch => ({
  getData() {
    dispatch(actionCreators.getData());
  }
});

export default connect(
  mapState,
  mapDispatch
)(City);
