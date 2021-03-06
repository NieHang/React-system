import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import { navReducer } from '../pages/nav/store';
import { basicTableReducer } from '../pages/table/basic/store';
import { highReducer } from '../pages/table/high/store';
import { cityReducer } from '../pages/city/store';
import { orderReducer } from '../pages/order/store';
import { userReducer } from '../pages/user/store';
import { mapReducer } from '../pages/bikemap/store';
import { permissionReducer } from '../pages/permission/store';

export default combineReducers({
  header: headerReducer,
  nav: navReducer,
  basicTable: basicTableReducer,
  highTable: highReducer,
  city: cityReducer,
  order: orderReducer,
  user: userReducer,
  map: mapReducer,
  permission: permissionReducer
});