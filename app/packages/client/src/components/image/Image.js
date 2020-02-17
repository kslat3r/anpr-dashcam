import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image as BootstrapImage } from 'react-bootstrap';
import './Image.css';

class Image extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
  }

  render() {
    if (!this.props.data) {
      return null;
    }

    return (
      <BootstrapImage
        responsive
        className="photo"
        src={`data:image/jpeg;base64,${this.props.data}`}
      />
    );
  }
}

export default Image;
