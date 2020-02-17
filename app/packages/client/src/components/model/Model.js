import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Loading from '../loading/Loading';
import './Model.css';

class Model extends Component {
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
    let model;

    if (this.props.details.item.model) {
      model = this.props.details.item.model;
    }

    return (
      <ListGroup className="model">
        <ListGroupItem header="Model">
          {this.props.details.incoming ? (
            <Loading />
          ) : null}

          {model || 'UNKNOWN'}
        </ListGroupItem>
      </ListGroup>
    )
  }
}

export default Model;
