import React, { PureComponent } from "react";
import { NavBox, Logo } from "./style";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import { actionCreators as headerAction } from "../../common/header/store";

const SubMenu = Menu.SubMenu;

class Nav extends PureComponent {
  render() {
    return (
      <NavBox>
        <Logo>
          <Link to="/">
            <div className="logo_box">
              <img
                className="logo_img"
                src="http://imoocms.51purse.com/assets/logo-ant.svg"
                alt="logo"
              />
              <span>AntD</span>
            </div>
          </Link>
        </Logo>
        <Menu
          /* 绑定this,获取history属性,用于跳转 */
          onClick={this.handleClick.bind(this)}
          mode="vertical"
          theme="dark"
          className="menu"
        >
          <Menu.Item key="/" context="首页">
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          <SubMenu
            key="UI"
            title={
              <span>
                <Icon type="smile" />
                <span>UI</span>
              </span>
            }
          >
            <Menu.Item key="/ui/buttons" context="按钮">
              按钮
            </Menu.Item>
            <Menu.Item key="model" context="弹框">
              弹框
            </Menu.Item>
            <Menu.Item key="loading" context="loading">
              loading
            </Menu.Item>
            <Menu.Item key="note" context="通知提醒">
              通知提醒
            </Menu.Item>
            <Menu.Item key="message" context="全局Message">
              全局Message
            </Menu.Item>
            <Menu.Item key="tab" context="Tab页标签">
              Tab页标签
            </Menu.Item>
            <Menu.Item key="card" context="图片画廊">
              图片画廊
            </Menu.Item>
            <Menu.Item key="carousel" context="轮播图">
              轮播图
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="form"
            context="表单"
            title={
              <span>
                <Icon type="setting" />
                <span>表单</span>
              </span>
            }
          >
            <Menu.Item key="login" context="登录">
              登录
            </Menu.Item>
            <Menu.Item key="enroll" context="注册">
              注册
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="table"
            context="表格"
            title={
              <span>
                <Icon type="table" />
                <span>表格</span>
              </span>
            }
          >
            <Menu.Item key="basic" context="基础表格">
              基础表格
            </Menu.Item>
            <Menu.Item key="high" context="高级表格">
              高级表格
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="rich" context="富文本">
            <Icon type="file-text" theme="outlined" />
            <span>富文本</span>
          </Menu.Item>
          <Menu.Item key="city" context="城市管理">
            <Icon type="dot-chart" theme="outlined" />
            <span>城市管理</span>
          </Menu.Item>
          <Menu.Item key="order" context="订单管理">
            <Icon type="bar-chart" theme="outlined" />
            <span>订单管理</span>
          </Menu.Item>
          <Menu.Item key="user" context="员工管理">
            <Icon type="usergroup-add" theme="outlined" />
            <span>员工管理</span>
          </Menu.Item>
          <Menu.Item key="bikemap" context="车辆地图">
            <Icon type="compass" theme="outlined" />
            <span>车辆地图</span>
          </Menu.Item>
          <SubMenu
            key="chart"
            context="图表"
            title={
              <span>
                <Icon type="area-chart" theme="outlined" />
                <span>图表</span>
              </span>
            }
          >
            <Menu.Item key="bar" context="柱形图">
              柱形图
            </Menu.Item>
            <Menu.Item key="pie" context="饼图">
              饼图
            </Menu.Item>
            <Menu.Item key="line" context="折线图">
              折线图
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="permission" context="权限设置">
            <Icon type="exclamation" theme="outlined" />
            <span>权限设置</span>
          </Menu.Item>
        </Menu>
      </NavBox>
    );
  }
  
  handleClick(e) {
    this.props.history.push(e.key);
    this.props.changePageName(e.item.props.context);
  }
}

const mapDispatch = dispatch => ({
  /**
   * 改变页面标题名称
   * !Bug: 刷新页面，页面名称又会变成原来的样子
   * *解决办法: 将标题写死在每个页面中
   */
  changePageName(context) {
    dispatch(headerAction.changePageName(context));
  }
});

// * withRouter让Nav组件获取match,history,location等属性
export default withRouter(connect(null, mapDispatch)(Nav));
