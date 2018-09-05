import React, { PureComponent } from "react";
import { BtnWrapper } from "./style";
import { withRouter } from "react-router";
import { Card, Button, Icon, Radio } from "antd";

class Buttons extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      radioValue: "default"
    };
    this.onLoading = this.onLoading.bind(this);
    this.offLoading = this.offLoading.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { isLoading, radioValue } = this.state;
    const ButtonGroup = Button.Group;
    const RadioGroup = Radio.Group;
    return (
      <BtnWrapper>
        <Card title="基础按钮">
          <Button type="primary">React</Button>
          <Button>Git</Button>
          <Button type="dashed">HTTPS</Button>
          <Button type="danger">NodeJS</Button>
          <Button type="ghost">JAVA</Button>
          <Button disabled>Python</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle" />
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={isLoading}>
            确定
          </Button>
          <Button type="primary" loading={isLoading} shape="circle" />
          <Button loading={isLoading} onClick={this.onLoading}>
            点击加载
          </Button>
          <Button loading={isLoading} shape="circle" />
          <Button type="primary" onClick={this.offLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组">
          <ButtonGroup>
            <Button type="primary" icon="left">
              后退
            </Button>
            <Button type="primary">
              前进
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸">
          <RadioGroup onChange={this.onChange} value={radioValue}>
            <Radio value={"small"}>小</Radio>
            <Radio value={"default"}>中</Radio>
            <Radio value={"large"}>大</Radio>
          </RadioGroup>
          <Button size={radioValue} type="primary">React</Button>
          <Button size={radioValue}>Git</Button>
          <Button size={radioValue} type="dashed">HTTPS</Button>
          <Button size={radioValue} type="danger">NodeJS</Button>
          <Button size={radioValue} type="ghost">JAVA</Button>
          <Button size={radioValue} disabled>Python</Button>
        </Card>
      </BtnWrapper>
    );
  }

  onChange(e) {
    this.setState(() => ({
      radioValue: e.target.value
    }));
  }

  onLoading() {
    this.setState(() => ({
      isLoading: true
    }));
  }

  offLoading() {
    this.setState(() => ({
      isLoading: false
    }));
  }
}
export default withRouter(Buttons);
