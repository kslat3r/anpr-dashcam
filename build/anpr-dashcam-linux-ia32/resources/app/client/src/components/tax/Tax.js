import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Loading from '../loading/Loading';
import './Tax.css';

class Tax extends Component {
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
    let taxed;
    let taxDue = 'UKNOWN';

    if (this.props.details.item.dvlaDetails && this.props.details.item.dvlaDetails.taxed !== undefined) {
      taxed = this.props.details.item.dvlaDetails.taxed;
      taxDue = this.props.details.item.dvlaDetails.taxDue || 'UNKNOWN';
    }

    return (
      <ListGroup className="tax">
        <ListGroupItem header="Tax" className={[taxed === undefined ? '' : taxed ? 'valid' : 'invalid']}>
          {this.props.details.incoming ? (
            <Loading />
          ) : null}

          {taxed === undefined ? 'UNKNOWN' : taxed ? `Due ${taxDue}` : 'Expired'}
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default Tax;
