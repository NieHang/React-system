import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  username: '肥秃哥',
  pageName: '首页',
  local: '',
  weather: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_PAGE_NAME: 
      return state.set('pageName', action.pageName);
    case constants.CHANGE_WEATHER:
      return state.merge({
        local: action.local,
        weather: action.weather
      });
    default:
      return state;
  }
};