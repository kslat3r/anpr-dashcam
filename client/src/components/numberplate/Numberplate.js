import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';
import './Numberplate.css';

class Numberplate extends Component {
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
    let last;
    let first;

    if (this.props.data.numberPlate) {
      last = this.props.data.numberPlate.split('').reverse().slice(0, 3).reverse().join('');
      first = this.props.data.numberPlate.replace(last, '');
    }

    return (
      <Jumbotron className={last && first ? 'valid' : 'invalid'}>
        <h1>{last && first ? `${first} ${last}` : 'UNKN OWN'}</h1>
      </Jumbotron>
    );
  }
}

export default Numberplate;
