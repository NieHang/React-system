import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  data: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DATA:
      return state.set('data', action.data)
    default:
      return state;
  }
};