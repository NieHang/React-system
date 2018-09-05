import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  url: '/'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_URL: 
     return state.set('url', action.url);
    default:
      return state;
  }
}