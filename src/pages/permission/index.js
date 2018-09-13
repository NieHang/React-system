import React, { PureComponent } from "react";
import {
  Card,
  Button,
  Modal,
  Select,
  Table,
  Input,
  Tree,
  Transfer,
  Spin
} from "antd";
import { PermissionWrapper } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Permission extends PureComponent {
  render() {
    const {
      column,
      list,
      roleVisible,
      perVisible,
      roleName,
      rolePerVisible,
      targetKeys,
      handleRole,
      handleRoleOk,
      handlePer,
      handlePerOk,
      changeRoleName,
      handleRolePer,
      handleRolePerOk,
      changeTargetKeys
    } = this.props;
    const Option = Select.Option;
    const TreeNode = Tree.TreeNode;
    let Load;
    if (list.size === 0) {
      Load = <Spin className='loading' tip="Loading..." />;
    } else {
      Load = (
        <Table
          bordered
          rowSelection={{
            type: "radio",
            onChange(selectRowKeys, selectRows) {
              changeRoleName(selectRows[0].role_name);
            }
          }}
          columns={column.toJS()}
          dataSource={[...list.toJS()]}
        />
      );
    }
    return (
      <PermissionWrapper>
        <Card
          title={
            <div>
              <Button type="primary" onClick={handleRole}>
                创建角色
              </Button>
              <Button type="primary" onClick={() => handlePer(roleName)}>
                设置权限
              </Button>
              <Button type="primary" onClick={() => handleRolePer(roleName)}>
                用户授权
              </Button>
            </div>
          }
        >
          {Load}
          <Modal
            title="创建角色"
            visible={roleVisible}
            onOk={handleRoleOk}
            onCancel={handleRoleOk}
          >
            <div>
              <span style={{ display: "inline-block", width: 70 }}>
                角色名称：
              </span>
              <Input placeholder="请输入角色名称" style={{ width: 200 }} />
            </div>
            <div style={{ marginTop: 10 }}>
              <span style={{ display: "inline-block", width: 70 }}>状态：</span>
              <Select defaultValue="开启">
                <Option value="开启">开启</Option>
                <Option value="关闭">关闭</Option>
              </Select>
            </div>
          </Modal>
          <Modal
            title="设置权限"
            visible={perVisible}
            onOk={handlePerOk}
            onCancel={handlePerOk}
          >
            <div>
              <span style={{ display: "inline-block", width: 70 }}>
                角色名称：
              </span>
              <Input
                placeholder="请输入角色名称"
                style={{ width: 200 }}
                disabled
                value={roleName}
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <span style={{ display: "inline-block", width: 70 }}>状态：</span>
              <Select defaultValue="开启">
                <Option value="开启">开启</Option>
                <Option value="关闭">关闭</Option>
              </Select>
            </div>
            <Tree checkable>
              <TreeNode title="平台权限" key="0">
                <TreeNode title="首页" key="0-0" />
                <TreeNode title="UI" key="0-1">
                  <TreeNode title="按钮" key="0-1-0" />
                  <TreeNode title="弹框" key="0-1-1" />
                  <TreeNode title="loading" key="0-1-2" />
                  <TreeNode title="通知提醒" key="0-1-3" />
                  <TreeNode title="全局Message" key="0-1-4" />
                  <TreeNode title="Tab页标签" key="0-1-5" />
                  <TreeNode title="图片画廊" key="0-1-6" />
                  <TreeNode title="轮播图" key="0-1-7" />
                </TreeNode>
                <TreeNode title="表单" key="0-2">
                  <TreeNode title="登录" key="0-2-0" />
                  <TreeNode title="注册" key="0-2-1" />
                </TreeNode>
                <TreeNode title="表格" key="0-3">
                  <TreeNode title="基础表格" key="0-3-0" />
                  <TreeNode title="高级表格" key="0-3-1" />
                </TreeNode>
                <TreeNode title="富文本" key="0-4" />
                <TreeNode title="城市管理" key="0-5" />
                <TreeNode title="管理" key="0-6">
                  <TreeNode title="订单详情" key="0-6-0" />
                  <TreeNode title="结束订单" key="0-6-1" />
                </TreeNode>
                <TreeNode title="员工管理" key="0-7" />
                <TreeNode title="车辆地图" key="0-8" />
                <TreeNode title="图表" key="0-9">
                  <TreeNode title="柱形图" key="0-9-0" />
                  <TreeNode title="饼状图" key="0-9-1" />
                  <TreeNode title="折线图" key="0-9-2" />
                </TreeNode>
                <TreeNode title="权限设置" key="0-10" />
              </TreeNode>
            </Tree>
          </Modal>
          <Modal
            title="用户授权"
            visible={rolePerVisible}
            onOk={handleRolePerOk}
            onCancel={handleRolePerOk}
          >
            <div style={{ marginBottom: 10 }}>
              <span style={{ display: "inline-block", width: 70 }}>
                角色名称：
              </span>
              <Input
                placeholder="请输入角色名称"
                style={{ width: 200 }}
                disabled
                value={roleName}
              />
            </div>
            <Transfer
              dataSource={[...list.toJS()]}
              titles={["待选用户", "已选用户"]}
              render={item => item.authorize_user_name}
              targetKeys={targetKeys.toJS()}
              onChange={(nextTargetKeys, direction, moveKeys) => {
                changeTargetKeys(nextTargetKeys);
              }}
            />
          </Modal>
        </Card>
      </PermissionWrapper>
    );
  }
  componentDidMount = () => {
    this.props.getList();
  };
}

const mapState = state => ({
  column: state.getIn(["permission", "column"]),
  list: state.getIn(["permission", "list"]),
  roleVisible: state.getIn(["permission", "roleVisible"]),
  perVisible: state.getIn(["permission", "perVisible"]),
  roleName: state.getIn(["permission", "roleName"]),
  rolePerVisible: state.getIn(["permission", "rolePerVisible"]),
  targetKeys: state.getIn(["permission", "targetKeys"])
});

const mapDispatch = dispatch => ({
  getList() {
    dispatch(actionCreators.getList());
  },
  handleRole() {
    dispatch(actionCreators.handleRole());
  },
  handleRoleOk() {
    dispatch(actionCreators.handleRoleOK());
  },
  handlePer(roleName) {
    if (roleName === "") {
      Modal.info({ title: "请选择一个角色" });
    } else {
      dispatch(actionCreators.handlePer());
    }
  },
  handlePerOk() {
    dispatch(actionCreators.handlePerOk());
  },
  changeRoleName(roleName) {
    dispatch(actionCreators.changeRoleName(roleName));
  },
  handleRolePer(roleName) {
    if (roleName === "") {
      Modal.info({ title: "请选择一个角色" });
    } else {
      dispatch(actionCreators.handleRolePer());
    }
  },
  handleRolePerOk() {
    dispatch(actionCreators.handleRolePerOk());
  },
  changeTargetKeys(targetKeys) {
    dispatch(actionCreators.changeTargetKeys(targetKeys));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Permission);
