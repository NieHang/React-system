import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  highTableData: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DATA:
      return state.set('highTableData', action.data);
    default:
      return state;
  }
};