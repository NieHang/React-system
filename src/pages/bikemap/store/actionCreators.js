import { constants } from './index';
import axios from 'axios';

const changeBikeList = list => ({
  type: constants.GET_BIKE_LIST,
  list
});

export const getBikeList = () => {
  return dispatch => {
    axios.get("https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/map/bike_list?0=%7B%22page%22:1%7D").then(res => {
      let result = res.data.result.bike_list.map(value => {
        value = value.split(",");
        return value;
      });
      dispatch(changeBikeList(result));
    }).catch(err => console.log(err));
  }
}