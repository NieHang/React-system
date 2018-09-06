import { constants } from "./index";
import axios from "axios";

const changeWeather = (local, weather) => ({
  type: constants.CHANGE_WEATHER,
  local,
  weather
});

export const changeLocalWeather = () => {
  return dispatch => {
    let BMap = window.BMap;
    let myCity = new BMap.LocalCity();
    myCity.get(result => {
      let local = result.name;
      if (result.name) {
        // 通过当前位置城市信息获取天气
        axios
          .get(
            "https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922",
            {
              params: {
                city: result.name
              }
            }
          )
          .then(res => {
            dispatch(changeWeather(local, res.data.HeWeather5[0].daily_forecast[0].cond.txt_n));
          });
      };
    });
  };
};

export const changePageName = pageName => ({
  type: constants.CHANGE_PAGE_NAME,
  pageName
});
