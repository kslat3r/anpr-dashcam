import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'halogen/PulseLoader';
import './Loading.css';

class Loading extends Component {
  static propTypes = {
    colour: PropTypes.string,
  };

  static defaultProps = {
    colour: '#fff'
  };

  render() {
    return (
      <div className="loading">
        <Loader color={this.props.colour} size="16px" />
      </div>
    );
  }
}

export default Loading;
