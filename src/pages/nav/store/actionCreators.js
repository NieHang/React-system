import { constants } from './index';

export const changeUrl = url => ({
  type: constants.CHANGE_URL,
  url
});