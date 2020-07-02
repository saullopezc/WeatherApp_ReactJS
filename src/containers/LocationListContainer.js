import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../actions";
import LocationList from "./../components/LocationList";
import { getCity, getWeatherCities } from "./../reducers";

class LocationListContainer extends Component {
  componentDidMount() {

    const { setWeather, setSelectedCity, cities, city } = this.props;

    setWeather(cities);
    setSelectedCity(city);

  }

  handleSelectionLocation = (city) => {
    this.props.setSelectedCity(city); //store.dispatch(setCity(city));
  };

  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectionLocation}
      ></LocationList>
    );
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setSWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
};

//export default LocationListContainer;




const mapDispatchToProps = dispatch => bindActionCreators(
actions, dispatch);

/*
const mapDispatchToProps = (dispatch) => ({
  setSelectedCity: (value) => dispatch(setSelectedCity(value)),
  setWeather: (cities) => dispatch(setWeather(cities)),
});*/

const mapStateToProps = (state) => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state),
});

const LocationListContainerConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationListContainer);

export default LocationListContainerConnected;
