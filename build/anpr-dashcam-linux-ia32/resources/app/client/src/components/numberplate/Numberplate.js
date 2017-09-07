import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';
import Loading from '../loading/Loading';
import './Numberplate.css';

class Numberplate extends Component {
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
    let last;
    let first;

    if (this.props.details.item.numberPlate) {
      last = this.props.details.item.numberPlate.split('').reverse().slice(0, 3).reverse().join('');
      first = this.props.details.item.numberPlate.replace(last, '');
    }

    return (
      <Jumbotron className={last && first ? 'valid' : 'invalid'}>
        {this.props.details.incoming ? (
          <Loading />
        ) : null}

        <h1>{last && first ? `${first} ${last}` : 'UNKN OWN'}</h1>
      </Jumbotron>
    );
  }
}

export default Numberplate;
