import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  columns: [
    {
      title: "Id",
      dataIndex: "id"
    },
    {
      title: "用户名",
      dataIndex: "username"
    },
    {
      title: "单身狗？",
      dataIndex: "isMarried"
    },
    {
      title: "生日",
      dataIndex: "birthday"
    },
    {
      title: "联系地址",
      dataIndex: "address"
    },
    {
      title: "早起时间",
      dataIndex: "time"
    }
  ],
  data: [],
  addVisible: false,
  updateVisible: false,
  infoVisible: false,
  // 选中的员工信息
  currentUser: {},
  username: '',
  sex: '',
  birthday: '',
  address: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DATA:
      return state.set('data', action.data);
    case constants.ADD_USER: 
      return state.set('addVisible', action.addVisible);
    case constants.ADD_OK: 
      return state.set('addVisible', action.addVisible);
    case constants.UPDATE_USER: 
      return state.set("updateVisible", action.updateVisible);
    case constants.UPDATE_OK:
      return state.set('updateVisible', action.updateVisible);
    case constants.SELECT_USER:
      return state.merge({
        currentUser: action.user,
        username: action.user.get('username'),
        sex: action.user.get('sex'),
        birthday: action.user.get('birthday'),
        address: action.user.get('address')
      });
    case constants.INFO_USER:
      return state.set('infoVisible', action.infoVisible);
    case constants.INFO_OK:
      return state.set('infoVisible', action.infoVisible);
    case constants.CHANGE_NAME:
      return state.set('username', action.username);
    case constants.CHANGE_SEX:
      return state.set('sex', action.sex);
    case constants.CHANGE_BIRTH:
      return state.set('birthday', action.birthday);
    case constants.CHANGE_ADDR:
      return state.set('address', action.address);
    default:
      return state;
  }
};