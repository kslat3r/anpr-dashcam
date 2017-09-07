import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Loading from '../loading/Loading';
import './MOT.css';

class MOT extends Component {
  static propTypes = {
    details: PropTypes.object.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.details.incoming !== nextProps.details.incoming) {
      return true;
    }

    if (this.props.details.item.numberPlate !== nextProps.details.item.numberPlate) {
      return true;
    }

    return false;
  }

  render() {
    let mot;
    let motExpires = 'UKNOWN';

    if (this.props.details.item.dvlaDetails && this.props.details.item.dvlaDetails.mot !== undefined) {
      mot = this.props.details.item.dvlaDetails.mot;
      motExpires = this.props.details.item.dvlaDetails.motExpires || 'UNKNOWN';
    }

    return (
      <ListGroup className="mot">
        <ListGroupItem header="MOT" className={[mot === undefined ? '' : mot ? 'valid' : 'invalid']}>
          {this.props.details.incoming ? (
            <Loading />
          ) : null}

          {mot === undefined ? 'UKNOWN' : mot ? `Expires ${motExpires}` : 'Expired'}
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default MOT;
