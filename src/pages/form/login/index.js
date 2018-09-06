import React, { PureComponent } from "react";
import { Form, Card, Button, Icon, Input } from "antd";
import { LoginWrapper } from "./style";
import AdvanceForm from "./form";

export default class Login extends PureComponent {
  render() {
    const FormItem = Form.Item;
    return (
      <LoginWrapper>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </FormItem>
            <FormItem>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Password"
              />
            </FormItem>
            <FormItem>
              <Button type="primary">Log in</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <AdvanceForm />
        </Card>
      </LoginWrapper>
    );
  }
}
