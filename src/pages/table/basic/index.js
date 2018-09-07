import React, { PureComponent } from "react";
import { Card, Table } from "antd";
import { connect } from "react-redux";
import { BasicTableWrapper } from "./style";
import { actionCreators } from "./store";

class BasicTable extends PureComponent {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: "Id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        dataIndex: "userName"
      },
      {
        title: "姓名",
        dataIndex: "name"
      },
      {
        title: "性别",
        dataIndex: "male"
      },
      {
        title: "状态",
        dataIndex: "state"
      },
      {
        title: "爱好",
        dataIndex: "hobby"
      },
      {
        title: "单身狗",
        dataIndex: "isDog"
      }
    ];
    this.basicData = [
      {
        key: "1",
        id: "1",
        userName: "feiTuGe",
        name: "肥秃哥",
        male: "男",
        state: "咸鱼一条",
        hobby: "肥秃",
        isDog: "单身狗一条"
      },
      {
        key: "2",
        id: "2",
        userName: "NieHang77@gmail.com",
        name: "聂航",
        male: "男",
        state: "逃离者",
        hobby: "Code和小姐姐",
        isDog: "单身狗一枚"
      },
      {
        key: "?",
        id: "?",
        userName: "?@gmail.com",
        name: "前端架构师",
        male: "男",
        state: "改变世界",
        hobby: "Code和小姐姐",
        isDog: "?"
      }
    ];
  }

  render() {
    const { basicTableData } = this.props;
    return (
      <BasicTableWrapper>
        <Card title="基础表格">
          <Table bordered columns={this.columns} dataSource={this.basicData} />
        </Card>
        <Card title="Mock表格">
          <Table
            bordered
            columns={this.columns}
            dataSource={[...basicTableData]}
          />
        </Card>
        <Card title="Mock表格-单选">
          <Table
            rowSelection={rowRadioSelection}
            bordered
            columns={this.columns}
            dataSource={[...basicTableData]}
          />
        </Card>
        <Card title="Mock表格-多选">
          <Table
            rowSelection={rowCheckboxSelection}
            bordered
            columns={this.columns}
            dataSource={[...basicTableData]}
            pagination={pagination}
          />
        </Card>
      </BasicTableWrapper>
    );
  }

  componentWillMount = () => {
    this.props.getData();
  };
}

const rowRadioSelection = {
  onChange(selectRowKeys, selectRows) {
    console.log(
      `selectRowKeys:${selectRowKeys}, selectRows:${JSON.stringify(selectRows)}`
    );
  },
  type: "radio"
};

const rowCheckboxSelection = {
  onChange(selectRowKeys, selectRows) {
    console.log(
      `selectRowKeys:${selectRowKeys}, selectRows:${JSON.stringify(selectRows)}`
    );
  },
  type: "check"
};

const pagination = {
  showQuickJumper: true
};

const mapState = state => ({
  basicTableData: state.getIn(["basicTable", "basicTableData"])
});

const mapDispatch = dispatch => ({
  getData() {
    dispatch(actionCreators.getData());
  }
});

export default connect(
  mapState,
  mapDispatch
)(BasicTable);
