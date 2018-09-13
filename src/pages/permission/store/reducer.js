import { fromJS } from "immutable";
import { constants } from "./index";

const defaultState = fromJS({
  column: [
    {
      title: "角色ID",
      dataIndex: "id"
    },
    {
      title: "角色名称",
      dataIndex: "role_name"
    },
    {
      title: "创建时间",
      dataIndex: "create_time"
    },
    {
      title: "使用状态",
      dataIndex: "status"
    },
    {
      title: "授权时间",
      dataIndex: "authorize_time"
    },
    {
      title: "授权人",
      dataIndex: "authorize_user_name"
    }
  ],
  list: [],
  roleVisible: false,
  perVisible: false,
  roleName: "",
  rolePerVisible: false,
  targetKeys: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_LIST:
      return state.merge({
        list: action.list,
        targetKeys: action.targetKeys
      });
    case constants.ROLE_TRUE:
      return state.set("roleVisible", true);
    case constants.ROLE_FALSE:
      return state.set("roleVisible", false);
    case constants.PER_TRUE:
      return state.set("perVisible", true);
    case constants.PER_FALSE:
      return state.set("perVisible", false);
    case constants.CHANGE_ROLE_NAME:
      return state.set("roleName", action.roleName);
    case constants.ROLE_PER_TRUE:
      return state.set('rolePerVisible', action.rolePerVisible);
    case constants.ROLE_PER_FALSE:
      return state.set('rolePerVisible', action.rolePerVisible);
    case constants.CHANGE_TARGET_KEYS:
      return state.set('targetKeys', action.targetKeys);
    default:
      return state;
  }
};
