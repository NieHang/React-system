import React, { PureComponent } from "react";
import {
  Card,
  Button,
  Table,
  Input,
  Modal,
  Radio,
  DatePicker,
  Popconfirm
} from "antd";
import { UserWrapper } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import moment from "moment";

class User extends PureComponent {
  render() {
    const RadioGroup = Radio.Group;

    const TextArea = Input.TextArea;
    const {
      columns,
      data,
      addVisible,
      updateVisible,
      currentUser,
      username,
      sex,
      birthday,
      address,
      addUser,
      addOk,
      updateUser,
      updateOk,
      selectUser,
      infoUser,
      infoOk,
      deleteUser,
      changeName,
      changeSex,
      changeBirth,
      changeAddr
    } = this.props;
    return (
      <UserWrapper>
        <Card>
          <Input
            placeholder="请输入用户名"
            style={{ width: 200, marginRight: 10 }}
          />
          <Input
            placeholder="请输入密码"
            style={{ width: 200, marginRight: 10 }}
          />
          <Button type="primary">登录</Button>
        </Card>
        <Card
          title={
            <div>
              <Button type="primary" onClick={addUser}>
                创建员工
              </Button>
              <Button type="primary" onClick={() => updateUser(currentUser)}>
                编辑员工
              </Button>
              <Button type="primary" onClick={infoUser}>
                员工详情
              </Button>
              <Popconfirm
                title="你确定要删除吗？"
                onConfirm={() => deleteUser(currentUser)}
                okText="Yes"
                cancelText="no"
              >
                <Button type="danger">删除员工</Button>
              </Popconfirm>
            </div>
          }
        >
          <Modal
            title="创建员工"
            visible={addVisible}
            onOk={addOk}
            onCancel={addOk}
          >
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                姓名：
              </span>
              <Input placeholder="请输入姓名" style={{ width: 200 }} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                性别：
              </span>
              <RadioGroup>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </RadioGroup>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                生日：
              </span>
              <DatePicker />
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                联系地址：
              </span>
              <TextArea style={{ width: 300 }} />
            </div>
          </Modal>
          <Modal
            title="编辑员工"
            visible={updateVisible}
            onOk={updateOk}
            onCancel={updateOk}
          >
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                姓名：
              </span>
              <Input
                placeholder="请输入姓名"
                style={{ width: 200 }}
                value={username}
                onChange={changeName}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                性别：
              </span>
              <RadioGroup value={sex === 2 ? "女" : "男"} onChange={changeSex}>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </RadioGroup>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                生日：
              </span>
              <DatePicker
                value={moment(birthday, "YYYY/MM/DD")}
                onChange={changeBirth}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                联系地址：
              </span>
              <TextArea
                style={{ width: 300 }}
                value={address}
                onChange={changeAddr}
              />
            </div>
          </Modal>
          <Modal
            title="编辑员工"
            visible={false}
            onOk={infoOk}
            onCancel={infoOk}
          >
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                姓名：
                {currentUser.username}
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                性别：
                {currentUser.sex === 0 ? "女" : "男"}
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                生日：
                {currentUser.birthday}
              </span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ width: 100, display: "inline-block" }}>
                联系地址：
                {currentUser.address}
              </span>
            </div>
          </Modal>
          <Table
            bordered
            rowSelection={{
              type: "radio",
              onChange(key, row) {
                selectUser(row[0]);
              }
            }}
            columns={[...columns.toJS()]}
            dataSource={[...data]}
          />
        </Card>
      </UserWrapper>
    );
  }
  componentDidMount = () => {
    this.props.getData();
  };
}
const mapState = state => ({
  columns: state.getIn(["user", "columns"]),
  data: state.getIn(["user", "data"]),
  addVisible: state.getIn(["user", "addVisible"]),
  updateVisible: state.getIn(["user", "updateVisible"]),
  currentUser: state.getIn(["user", "currentUser"]),
  infoVisible: state.getIn(["user", "infoVisible"]),
  username: state.getIn(["user", "username"]),
  sex: state.getIn(["user", "sex"]),
  birthday: state.getIn(["user", "birthday"]),
  address: state.getIn(["user", "address"])
});

const mapDispatch = dispatch => ({
  getData() {
    dispatch(actionCreators.getData());
  },
  addUser() {
    dispatch(actionCreators.addUser());
  },
  addOk() {
    dispatch(actionCreators.addOk());
  },
  updateUser(currentUser) {
    if (Object.keys(currentUser.toJS()).length <= 0) {
      Modal.info({ title: "温馨提示", content: "请选择一个员工" });
    } else {
      dispatch(actionCreators.updateUser());
    }
  },
  updateOk() {
    dispatch(actionCreators.updateOk());
  },
  selectUser(user) {
    dispatch(actionCreators.selectUser(user));
  },
  infoUser() {
    dispatch(actionCreators.infoUser());
  },
  infoOk() {
    dispatch(actionCreators.infoOk());
  },
  deleteUser(currentUser) {
    if (Object.keys(currentUser.toJS()).length <= 0) {
      Modal.info({ title: "温馨提示", content: "请选择一个员工" });
    } else {
      dispatch(actionCreators.getData());
      Modal.info({title: '删除成功！'});
    }
  },
  changeName(e) {
    dispatch(actionCreators.changeName(e.target.value));
  },
  changeSex(e) {
    dispatch(actionCreators.changeSex(e.target.value === "女" ? 2 : 1));
  },
  changeBirth(moment, date) {
    dispatch(actionCreators.changeBirth(date));
  },
  changeAddr(e) {
    dispatch(actionCreators.changeAddr(e.target.value));
  }
});

export default connect(
  mapState,
  mapDispatch
)(User);
