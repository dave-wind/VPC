/**
 * Created by dave on 2018/5/6.
 */
import request from './request';

export default {
  // https://www.apiopen.top/weatherApi https://www.sojson.com/open/api/weather/json.shtml
  getWeather: (val) => request.get('/api/open/api/weather/json.shtml', {city: val}),
};
