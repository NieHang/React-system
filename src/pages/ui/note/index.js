import React, { PureComponent } from "react";
import { Card, notification, Button, Select } from "antd";
import { NoteWrapper } from "./style";

export default class Note extends PureComponent {
  constructor(props) {
    super(props);

    this.openNotification = this.openNotification.bind(this);
  }

  render() {
    const options = [
      "topLeft|success",
      "topRight|info",
      "bottomLeft|warning",
      "bottomRight|error"
    ];
    const { Option } = Select;
    return (
      <NoteWrapper>
        <Card title="通知信息框">
          <Button
            type="primary"
            onClick={() => this.openNotification("success")}
          >
            Success
          </Button>
          <Button type="primary" onClick={() => this.openNotification("info")}>
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning")}
          >
            Warning
          </Button>
          <Button type="primary" onClick={() => this.openNotification("error")}>
            Error
          </Button>
        </Card>
        <Card title="通知提醒框-方向控制">
          <Select
            defaultValue={options[0]}
            style={{ width: 120, marginRight: 10 }}
            onChange={value => {
              this.openNotification(value.substring(value.indexOf("|") + 1), value.substring(0, value.indexOf("|")));
            }}
          >
            {options.map(value => {
              return (
                <Option key={value} value={value}>
                  {value.substring(0, value.indexOf("|"))}
                </Option>
              );
            })}
          </Select>
        </Card>
      </NoteWrapper>
    );
  }

  openNotification = (type = "success", placement = "topLeft") => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: "发工资啦！",
      description: "终于不用吃土啦",
      key,
      btn,
      type,
      placement
    });
  };
}
