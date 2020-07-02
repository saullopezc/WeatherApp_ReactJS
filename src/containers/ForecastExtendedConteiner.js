import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import ForecastExtended from "./../components/ForecastExtended";
import { getCity, getForecastDataFromCities } from "./../reducers";

class ForecastExtendedConteiner extends Component {
  render() {
    const { city, forecastData } = this.props;
    return (
      city && (
        <ForecastExtended
          city={city}
          forecastData={forecastData}
        ></ForecastExtended>
      )
    );
  }
}

ForecastExtendedConteiner.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  forecastData: getForecastDataFromCities(state),
});

export default connect(mapStateToProps, null)(ForecastExtendedConteiner);
