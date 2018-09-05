import React, { PureComponent } from 'react';
import { Card, Button, message } from 'antd';
import { MessageWrapper } from './style';

export default class Message extends PureComponent {
  constructor(props) {
    super(props)
  
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.info = this.info.bind(this);
    this.warning = this.warning.bind(this);
    this.loading = this.loading.bind(this);
  }
  

  render() {
    return (
      <MessageWrapper>
        <Card title='全局提示框'>
          <Button type='primary' onClick={this.success}>前端架构师</Button>
          <Button type='primary' onClick={this.error}>出bug啦</Button>
          <Button type='primary' onClick={this.info}>去杭州吧</Button>
          <Button type='primary' onClick={this.warning}>注意你的代码规范</Button>
          <Button type='primary' onClick={this.loading}>正在加载中</Button>
        </Card>
      </MessageWrapper>
    )
  }

  success() {
    message.success('前端架构师');
  }

  error() {
    message.error('出bug啦');
  }

  info() {
    message.info('去杭州吧');
  }

  warning() {
    message.warning('注意你的代码规范');
  }

  loading() {
    message.loading('正在加载中');
  }
}
