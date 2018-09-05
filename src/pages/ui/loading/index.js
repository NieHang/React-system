import React, { PureComponent } from "react";
import { Card, Spin, Icon, Alert } from "antd";
import { LoadWrapper } from "./style";

export default class Loading extends PureComponent {
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
      <LoadWrapper>
        <Card title="Spin用法">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={antIcon} />
        </Card>
        <Card title='内容遮罩'>
          <Alert
            message="Success"
            description="React牛逼"
            type="success"
            showIcon
          />
          <Spin spinning>
            <Alert
              message="info"
              description="内容遮罩"
              type="info"
              showIcon
            />
          </Spin>
          <Spin spinning tip='加载中'>
            <Alert
              message="info"
              description="内容遮罩"
              type="info"
              showIcon
            />
          </Spin>
          <Spin spinning tip='自定义loading' indicator={antIcon}>
            <Alert
              message="info"
              description="内容遮罩"
              type="info"
              showIcon
            />
          </Spin>
        </Card>
      </LoadWrapper>
    );
  }
}
