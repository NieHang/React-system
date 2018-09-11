import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  bike_list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_BIKE_LIST:
      return state.set('bike_list', action.list);
    default:
      return state;
  }
};