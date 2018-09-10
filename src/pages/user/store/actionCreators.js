import { constants } from "./index";
import axios from "axios";
import { fromJS } from 'immutable';

const changeData = data => ({
  type: constants.GET_DATA,
  data
});

export const getData = () => {
  return dispatch => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/table/list1?0=%7B%22page%22:1%7D"
      )
      .then(res => {
        let result = res.data.result.list.map(value => {
          value.key = value.id;
          value.isMarried = value.isMarried === 1 ? '不吃狗粮' : '单身狗没跑了';
          return value;
        });
        dispatch(changeData(result));
      });
  };
};

// 打开创建员工界面
export const addUser = () => ({
  type: constants.ADD_USER,
  addVisible: true
});
// 关闭创建员工界面
export const addOk = () => ({
  type: constants.ADD_OK,
  addVisible: false
});

// 打开编辑员工界面
export const updateUser = () => ({
  type: constants.UPDATE_USER,
  updateVisible: true,
});
export const updateOk = () => ({
  type: constants.UPDATE_OK,
  updateVisible: false
});

// 选择员工信息
export const selectUser = user => ({
  type: constants.SELECT_USER,
  user: fromJS(user)
});

// 打开关闭员工详情界面
export const infoUser = () => ({
  type: constants.INFO_USER,
  infoVisible: true
});
export const infoOk = () => ({
  type: constants.INFO_OK,
  infoVisible: false
});

// 修改姓名
export const changeName = username => ({
  type: constants.CHANGE_NAME,
  username
});
// 修改性别
export const changeSex = sex => ({
  type: constants.CHANGE_SEX,
  sex
});
// 修改生日
export const changeBirth = birthday => ({
  type: constants.CHANGE_BIRTH,
  birthday
});
// 修改员工地址
export const changeAddr = address => ({
  type: constants.CHANGE_ADDR,
  address
});