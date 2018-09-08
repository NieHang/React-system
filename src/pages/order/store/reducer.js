import { fromJS } from "immutable";
import { constants } from "./index";

const defaultState = fromJS({
  columns: [
    {
      title: "订单编号",
      dataIndex: "order_sn",
      width: 200
    },
    {
      title: "车辆编号",
      dataIndex: "bike_sn",
      width: 200
    },
    {
      title: "用户名",
      dataIndex: "user_name",
      width: 200
    },
    {
      title: "手机号码",
      dataIndex: "mobile",
      width: 200
    },
    {
      title: "里程",
      dataIndex: "distance",
      width: 200
    },
    {
      title: "行程时长",
      dataIndex: "total_time",
      width: 200
    },
    {
      title: "状态",
      dataIndex: "status",
      width: 200
    },
    {
      title: "开始时间",
      dataIndex: "start_time",
      width: 200
    },
    {
      title: "结束时间",
      dataIndex: "end_time",
      width: 200
    },
    {
      title: "订单金额",
      dataIndex: "total_fee",
      width: 200
    },
    {
      title: "实付金额",
      dataIndex: "user_pay",
      width: 200
    }
  ],
  data: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DATA:
      return state.set("data", action.data);
    default:
      return state;
  }
};
