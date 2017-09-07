import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Details.css';

class Details extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.data.numberPlate !== nextProps.data.numberPlate) {
      return true;
    }

    return false;
  }

  render() {
    if (Object.keys(this.props.data).length === 0) {
      return null;
    }

    const data = this.props.data;
    const dvlaDetails = data.dvlaDetails;
    const numberPlateDetails = data.numberPlateDetails;

    return (
      <div className="details">
        <ListGroup>
          <ListGroupItem header="Date of registration">
            {dvlaDetails && dvlaDetails.dateOfRegistration ? dvlaDetails.dateOfRegistration : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Year of manufacture">
            {dvlaDetails && dvlaDetails.yearOfManufacture ? dvlaDetails.yearOfManufacture : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Cylinder capacity">
            {dvlaDetails && dvlaDetails.cylinderCapacity ? dvlaDetails.cylinderCapacity : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="CO2 emissions">
            {dvlaDetails && dvlaDetails.co2Emissions ? dvlaDetails.co2Emissions : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Fuel type">
            {dvlaDetails && dvlaDetails.fuelType ? dvlaDetails.fuelType : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Export marker">
            {dvlaDetails && dvlaDetails.exportMarker ? dvlaDetails.exportMarker : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Vehicle status">
            {dvlaDetails && dvlaDetails.vehicleStatus ? dvlaDetails.vehicleStatus : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Vehicle type approval">
            {dvlaDetails && dvlaDetails.vehicleTypeApproval ? dvlaDetails.vehicleTypeApproval : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Wheel plan">
            {dvlaDetails && dvlaDetails.wheelplan ? dvlaDetails.wheelplan : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Revenue weight">
            {dvlaDetails && dvlaDetails.revenueWeight ? dvlaDetails.revenueWeight : 'Unknown'}
          </ListGroupItem>

          <ListGroupItem header="Irish">
            {numberPlateDetails && numberPlateDetails.irish !== undefined ? numberPlateDetails.irish ? 'Yes' : 'No' : 'Unknown'}
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Details;
