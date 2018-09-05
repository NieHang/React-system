import React, { PureComponent } from "react";
import { Card, Tabs, message, Icon } from "antd";
import { TabWrapper } from "./style";

export default class Tab extends PureComponent {
  constructor(props) {
    super(props);

    this.newTabIndex = 0;

    const panes = [
      { title: "Tab1", content: "Content of Tab1", key: "1" },
      { title: "Tab2", content: "Content of Tab2", key: "2" },
      { title: "Tab3", content: "Content of Tab3", key: "3", closable: false }
    ];

    this.state = {
      activeKey: panes[0].key,
      panes
    };
  }

  onChange = activeKey => {
    this.setState(() => ({ activeKey }));
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: `Tab${this.newTabIndex}`,
      content: "Content of new Tab",
      key: activeKey
    });
    this.setState(() => ({
      panes,
      activeKey
    }));
  };

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    // 删除当前选中的页签，然后此页签的前一个页签将自动被选中
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState(() => ({
      panes,
      activeKey
    }));
  };

  render() {
    const TabPane = Tabs.TabPane;
    return (
      <TabWrapper>
        <Card title="Tab页签">
          <Tabs defaultActiveKey="1" onChange={info}>
            <TabPane tab="Tab 1" key="1">
              Tab1
            </TabPane>
            <TabPane tab="Tab 2" disabled key="2">
              Tab2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Tab3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="带图标的页签">
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <Icon type="apple" />
                  Apple
                </span>
              }
              key="1"
            >
              Mac
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="chrome" />
                  chrome
                </span>
              }
              key="2"
            >
              谷歌
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab可关闭卡片式页签">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Card>
      </TabWrapper>
    );
  };
}

const info = e => {
  message.info(`您选择了页签：${e}`);
};
