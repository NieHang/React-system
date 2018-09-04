import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import { navReducer } from '../pages/nav/store';

export default combineReducers({
  header: headerReducer,
  nav: navReducer
});