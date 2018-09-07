import { constants } from './index';
import axios from 'axios';

const changeData = data => ({
  type: constants.GET_DATA,
  data
});

export const getData = () => {
  return dispatch => {
    axios.get('/api/basicTableData.json').then(res => {
      dispatch(changeData(res.data.basicTableData));
    }).catch(err => {
      alert(err);
    });
  };
};