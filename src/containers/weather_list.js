import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = _.map(cityData.list, weather => weather.main.temp - 273.15 );
    const pressures = _.map(cityData.list, weather => weather.main.pressure);
    const humidities = _.map(cityData.list, weather => weather.main.humidity);
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color='orange' units='°C' /></td>
        <td><Chart data={pressures} color='green' units='hPa' /></td>
        <td><Chart data={humidities} color='black' units='%'/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { _.map(this.props.weather, this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
