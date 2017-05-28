import React from 'react';

var WeatherMessage = ({temp, location}) =>{ //Same as var WeatherMessage = (props) =>{ var {temp, location} = props
  return (
    <h3  className="text-center">It is {temp}°C in {location}.</h3>
  )
}

module.exports = WeatherMessage;
