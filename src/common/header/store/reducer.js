import { fromJS } from 'immutable';

const defaultState = fromJS({
  username: '肥秃哥'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};