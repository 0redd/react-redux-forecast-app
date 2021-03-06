import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.props.fetchWeather(this.state.term);
    this.setState({term : ''})
  }

  render() {
    return (
      <form
        className='input-group'
        onSubmit={(event) => this.onFormSubmit(event)}>

        <input
          className='form-control'
          placeholder='Get a five-day forecast in your favorite cities'
          value={this.state.term}
          onChange={(event) => this.onInputChange(event)}  />
        <span className='input-group-btn'>
          <button type='submit' className='btn'>Submit</button>
        </span>
      </form>
    );
  }
}

// so we can call the actions from the containers like this.props.fetchWeather
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
