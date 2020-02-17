import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Loading from '../loading/Loading';
import './Make.css';

class Make extends Component {
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
    let make

    if (this.props.details.item.dvlaDetails && this.props.details.item.dvlaDetails.make && this.props.details.item.dvlaDetails.make !== '') {
      make = this.props.details.item.dvlaDetails.make
    }

    return (
      <ListGroup className="make">
        <ListGroupItem header="Make">
          {this.props.details.incoming ? (
            <Loading />
          ) : null}

          {make || 'UNKNOWN'}
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default Make;
