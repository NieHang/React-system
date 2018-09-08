import { constants } from "./index";
import axios from "axios";

const changeData = data => ({
  type: constants.GET_DATA,
  data
});

const getDate = second => {
  let h = Math.floor(second / 3600);
  let m = Math.floor((second / 60 % 60));
  let s = Math.floor((second % 60));
  return `${h}小时${m}分钟${s}秒`;
};

export const getData = () => {
  return dispatch => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/order/list?0=%7B%22page%22:1%7D"
      )
      .then(res => {
        let result = res.data.result.item_list.map(value => {
          value.key = value.id;
          value.distance = `${value.distance / 1000}km`;
          value.total_fee = `${value.total_fee / 100}元`;
          value.user_pay = `${value.user_pay / 100}元`;
          value.status = value.status === 1 ? '进行中' : '行程结束';
          value.total_time = getDate(value.total_time);
          return value;
        });
        dispatch(changeData(result));
      });
  };
};
