import React, { PureComponent } from "react";
import { NavBox, Logo } from "./style";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

function handleClick(e) {
  console.log("click", e);
}

export default class Nav extends PureComponent {
  render() {
    return (
      <NavBox>
        <Logo>
          <Link to="/">
            <div className="logo_box">
              <img
                className="logo_img"
                src="http://imoocms.51purse.com/assets/logo-ant.svg"
                alt=""
              />
              <span>AntD</span>
            </div>
          </Link>
        </Logo>
        <Menu
          onClick={handleClick}
          mode="vertical"
          theme='dark'
          className='menu'
        >
          <Menu.Item key="home">
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
            <Menu.Item key="button">按钮</Menu.Item>
            <Menu.Item key="model">弹框</Menu.Item>
            <Menu.Item key="loading">loading</Menu.Item>
            <Menu.Item key="note">通知提醒</Menu.Item>
            <Menu.Item key="message">全局Message</Menu.Item>
            <Menu.Item key="tab">Tab页标签</Menu.Item>
            <Menu.Item key="card">图片画廊</Menu.Item>
            <Menu.Item key="carousel">轮播图</Menu.Item>
          </SubMenu>
          <SubMenu
            key="form"
            title={
              <span>
                <Icon type="setting" />
                <span>表单</span>
              </span>
            }
          >
            <Menu.Item key="login">登录</Menu.Item>
            <Menu.Item key="enroll">注册</Menu.Item>
          </SubMenu>
          <SubMenu
            key="table"
            title={
              <span>
                <Icon type="table" />
                <span>表格</span>
              </span>
            }
          >
            <Menu.Item key="basic">基础表格</Menu.Item>
            <Menu.Item key="high">高级表格</Menu.Item>
          </SubMenu>
          <Menu.Item key="rich">
            <Icon type="file-text" theme="outlined" />
            <span>富文本</span>
          </Menu.Item>
          <Menu.Item key="city">
            <Icon type="dot-chart" theme="outlined" />
            <span>城市管理</span>
          </Menu.Item>
          <Menu.Item key="order">
            <Icon type="bar-chart" theme="outlined" />
            <span>订单管理</span>
          </Menu.Item>
          <Menu.Item key="user">
            <Icon type="usergroup-add" theme="outlined" />
            <span>员工管理</span>
          </Menu.Item>
          <Menu.Item key="bikemap">
            <Icon type="compass" theme="outlined" />
            <span>车辆地图</span>
          </Menu.Item>
          <SubMenu
            key="chart"
            title={
              <span>
                <Icon type="area-chart" theme="outlined" />
                <span>图表</span>
              </span>
            }
          >
            <Menu.Item key="bar">柱形图</Menu.Item>
            <Menu.Item key="pie">饼图</Menu.Item>
            <Menu.Item key="line">折线图</Menu.Item>
          </SubMenu>
          <Menu.Item key="permission">
            <Icon type="exclamation" theme="outlined" />
            <span>权限设置</span>
          </Menu.Item>
        </Menu>
      </NavBox>
    );
  }
}
