import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import { navReducer } from '../pages/nav/store';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  header: headerReducer,
  nav: navReducer,
  router: routerReducer
});