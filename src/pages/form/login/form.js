import React, { PureComponent } from "react";
import { Form, Button, Input, Icon, Checkbox, message } from "antd";

const FormItem = Form.Item;

class AdvanceForm extends PureComponent {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`欢迎${values.userName}来到米奇妙妙屋，您的密码是:${values.password}`);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className='login-form'>
        <FormItem hasFeedback>
          {getFieldDecorator("userName", {
            rules: [
              {
                pattern: /^[A-Za-z0-9]{4,8}$/,
                message: "请输入4到8位的字母和数字"
              },
              {
                required: true,
                message: "请输入用户名"
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "请输入密码"
              },
              {
                pattern: /^[A-Za-z0-9_]{6,20}$/,
                message: "请输入6-20位的密码"
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type='password'
              placeholder='Password'
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a href="" className="login-form-forgot">忘记密码</a>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
          Or <a href="">register</a>
        </FormItem>
      </Form>
    );
  }
}
export default Form.create()(AdvanceForm);
