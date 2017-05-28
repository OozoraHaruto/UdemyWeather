import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    };
  };
  handleSearch = (loc) => {
    this.setState({isLoading: true});

    openWeatherMap.getData(loc)
    .then((data) => {
      this.setState({
        location: data.location,
        temp: data.temp,
        isLoading: false
      });
    }).catch((error) => {
      this.setState({ isLoading: false });
      alert(error);
    });
  };
  render(){
    var {isLoading, temp, location} = this.state;

    var renderMessage = () =>{ //Same as function renderMessage(){
      if (isLoading){
        return (<h3  className="text-center">Fetching weather...</h3>);
      }  else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
}

module.exports = Weather;
