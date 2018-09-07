import React, { PureComponent } from "react";
import { Card, Table, Popconfirm, Badge } from "antd";
import { HighTableWrapper } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class High extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sortedInfo: {
        order: "ascend",
        columnKey: "id"
      },
      actionTable: [
        {
          key: "1",
          id: "1",
          userName: "FeiTuGe",
          name: "肥秃哥API",
          male: "男",
          hobby: <Badge status="default" text="肥秃" />,
          isDog: "单身狗一条"
        },
        {
          key: "2",
          id: "2",
          userName: "NieHang77@gmail.com",
          name: "聂航API",
          male: "男",
          hobby: <Badge status="success" text="Code和小姐姐" />,
          isDog: "单身狗一枚"
        },
        {
          key: "?",
          id: "?",
          userName: "?@gmail.com",
          name: "前端架构师API",
          male: "男",
          hobby: <Badge status="processing" text="Code和小姐姐" />,
          isDog: "?"
        }
      ]
    };

    this.columnsTop = [
      { title: "Id", dataIndex: "id", width: 150 },
      { title: "用户名", dataIndex: "userName", width: 150 },
      { title: "姓名", dataIndex: "name", width: 150 },
      { title: "性别", dataIndex: "male", width: 150 },
      { title: "状态", dataIndex: "state", width: 150 },
      { title: "爱好", dataIndex: "hobby", width: 150 },
      { title: "单身狗", dataIndex: "isDog", width: 150 }
    ];
    this.columnsLeft = [
      { title: "Id", dataIndex: "id", width: 200, fixed: "left" },
      { title: "用户名", dataIndex: "userName", width: 200, fixed: "left" },
      { title: "姓名", dataIndex: "name", width: 200 },
      { title: "性别", dataIndex: "male", width: 200 },
      { title: "状态", dataIndex: "state", width: 200 },
      { title: "爱好", dataIndex: "hobby", width: 200 },
      { title: "单身狗", dataIndex: "isDog", width: 200 }
    ];
    this.columnsAction = [
      { title: "Id", dataIndex: "id", width: 150 },
      { title: "用户名", dataIndex: "userName", width: 150 },
      { title: "姓名", dataIndex: "name", width: 150 },
      { title: "性别", dataIndex: "male", width: 150 },
      { title: "爱好", dataIndex: "hobby", width: 150 },
      { title: "单身狗", dataIndex: "isDog", width: 150 },
      {
        title: "操作",
        dataIndex: "action",
        width: 150,
        render: (text, record) => {
          return this.state.actionTable.length >= 1 ? (
            <Popconfirm
              title="确定要删除吗？"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="javascript:;">删除</a>
            </Popconfirm>
          ) : null;
        }
      }
    ];
  }

  handleDelete = key => {
    const dataSource = [...this.state.actionTable];
    this.setState(() => ({
      actionTable: dataSource.filter(item => item.key !== key)
    }));
  };

  changeSort = (pagination, filters, sorter) => {
    this.setState(() => ({
      sortedInfo: sorter
    }));
  };

  render() {
    const { highTableData } = this.props;
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};

    const columnsSort = [
      {
        title: "Id",
        dataIndex: "id",
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order
      },
      { title: "用户名", dataIndex: "userName" },
      { title: "姓名", dataIndex: "name" },
      { title: "性别", dataIndex: "male" },
      { title: "状态", dataIndex: "state" },
      { title: "爱好", dataIndex: "hobby" },
      { title: "单身狗", dataIndex: "isDog" }
    ];

    return (
      <HighTableWrapper>
        <Card title="头部固定">
          <Table
            bordered
            columns={this.columnsTop}
            dataSource={[...highTableData]}
            scroll={{ y: 240 }}
          />
        </Card>
        <Card title="左侧固定">
          <Table
            bordered
            columns={this.columnsLeft}
            dataSource={[...highTableData]}
            scroll={{ x: 1400 }}
          />
        </Card>
        <Card title="排序">
          <Table
            columns={columnsSort}
            dataSource={[...highTableData]}
            onChange={this.changeSort}
          />
        </Card>
        <Card title="操作">
          <Table
            bordered
            columns={this.columnsAction}
            dataSource={[...this.state.actionTable]}
          />
        </Card>
      </HighTableWrapper>
    );
  }

  componentDidMount = () => {
    this.props.getData();
  };
}

const mapState = state => ({
  highTableData: state.getIn(["highTable", "highTableData"])
});

const mapDispatch = dispatch => ({
  getData() {
    dispatch(actionCreators.getData());
  }
});

export default connect(
  mapState,
  mapDispatch
)(High);
