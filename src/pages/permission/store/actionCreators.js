import { constants } from './index';
import axios from 'axios';
import moment from 'moment';
import { List } from 'immutable';

const changeList = (list, targetKeys) => ({
  type: constants.GET_LIST,
  list,
  targetKeys
});

export const getList = () => {
  return dispatch => {
    axios.get("https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/role/list?0=%7B%7D").then(res => {
      let result = res.data.result.item_list.map(value => {
        value.key = value.id.toString();
        value.create_time = moment(value.create_time).format('YYYY-MM-DD');
        value.authorize_time = moment(value.authorize_time).format('YYYY-MM-DD');
        value.status = value.status === 0 ? '停用' : '启用';
        return value;
      });
      // 穿梭框
      let targetKeys = result.filter(value => value.key <= 5);
      dispatch(changeList(result, targetKeys));
    });
  }
};

// 打开关闭创建角色界面
export const handleRole = () => ({
  type: constants.ROLE_TRUE
});

export const handleRoleOK = () => ({
  type: constants.ROLE_FALSE
});

// 打开关闭权限设置界面
export const handlePer = () => ({
  type: constants.PER_TRUE
});

export const handlePerOk = () => ({
  type: constants.PER_FALSE
});

// 修改权限设置界面中的角色名称
export const changeRoleName = roleName => ({
  type: constants.CHANGE_ROLE_NAME,
  roleName
});

// 打开关闭角色授权界面
export const handleRolePer = () => ({
  type: constants.ROLE_PER_TRUE,
  rolePerVisible: true
});

export const handleRolePerOk = () => ({
  type: constants.ROLE_PER_FALSE,
  rolePerVisible: false
});

// 修改targetKeys集合
export const changeTargetKeys = targetKeys => ({
  type: constants.CHANGE_TARGET_KEYS,
  targetKeys: List(targetKeys)
});