import { constants } from "./index";
import { List } from "immutable";
import axios from "axios";
import moment from 'moment';

const changeData = data => ({
  type: constants.GET_DATA,
  data: List(data)
});

export const getData = () => {
  return dispatch => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/open_city?0=%7B%22page%22:1%7D"
      )
      .then(res => {
        let result = res.data.result.item_list.map(value => {
          return {
            key: value.id,
            id: value.id,
            name: value.name,
            open_time: value.open_time,
            sys_user_name: value.sys_user_name,
            update_time: moment(value.update_time).format('YYYY-MM-DD'),
            // 用车模式
            mode: value.mode === 1 ? '停车点' : '禁停区',
            // 营运模式
            op_mode: value.op_mode === 1 ? '加盟' : '自营',
            franchisee_name: value.franchisee_name,
            city_admins: value.city_admins.map(value => {
              return value.user_name
            }).join(',')
          };
        });
        dispatch(changeData(result));
      });
  };
};
