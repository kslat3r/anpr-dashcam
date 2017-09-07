import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DetailsActions from '../../actions/details';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Details.css';

class Details extends Component {
  static propTypes = {
    details: PropTypes.object.isRequired,

    detailsActions: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.detailsActions.listen();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.details.item.numberPlate !== nextProps.details.item.numberPlate) {
      return true;
    }

    return false;
  }

  render() {
    if (Object.keys(this.props.details.item).length === 0) {
      return null;
    }

    const details = this.props.details.item;
    const dvlaDetails = details.dvlaDetails;
    const numberPlateDetails = details.numberPlateDetails;

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

const mapStateToProps = (state) => {
  return {
    details: state.details.toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsActions: bindActionCreators(DetailsActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
