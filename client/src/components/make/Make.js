import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Make.css';

class Make extends Component {
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
    return null;
  }
}

export default Make;
