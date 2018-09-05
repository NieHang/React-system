import { constants } from './index';

export const changePageName = (pageName) => ({
  type: constants.CHANGE_PAGE_NAME,
  pageName
});