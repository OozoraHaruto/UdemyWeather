import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fd6c05c1ae330d10fde64e5219a0df38&units=metric';

module.exports = {
  getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl)
    .then(function(response) {
      if(response.data.cod && response.data.message) {
          throw new Error('Unable to fetch weather');
      } else {
          return response.data.main.temp;
      }
    }).catch(function(error) {
      throw new Error(error.response.data.message);
      console.log(error.response.data.message);
    })
  },
  getData(location) { //added function
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl)
    .then(function(response) {
      if(response.data.cod && response.data.message) {
          throw new Error('Unable to fetch weather');
      } else {
          return {temp: response.data.main.temp, location: `${response.data.name}, ${response.data.sys.country}`}; //Go on and add more data :P          }
      }
    }).catch(function(error) {
      throw new Error(error.response.data.message);
      console.log(error.response.data.message);
    });
  }
}
