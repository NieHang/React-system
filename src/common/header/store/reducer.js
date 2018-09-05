import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  username: '肥秃哥',
  pageName: '首页'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_PAGE_NAME: 
      return state.set('pageName', action.pageName);
    default:
      return state;
  }
};