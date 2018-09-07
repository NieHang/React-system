import { constants } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  basicTableData: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DATA:
      return state.set("basicTableData", action.data);
    default:
      return state;
  }
};