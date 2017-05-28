import React from 'react';

class WeatherForm extends React.Component {
  onFormSubmit = (e) =>{
    e.preventDefault();

    const location = this.location.value;
    if(location.length > 0){
      this.location.value = "";
      this.props.onSearch(location);
    }
  }
  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref={(ref) => this.location = ref} placeholder="City Name" />
        <button className="expanded hollow button">Get Weather</button>
      </form>
    )
  }
}

module.exports = WeatherForm;
