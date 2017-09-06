import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ImageActions from '../../actions/image';
import './Image.css';

class Image extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,

    imageActions: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.imageActions.listen();
  }

  render() {
    if (!this.props.image.item) {
      return null;
    }

    return (
      <img
        src={`data:image/jpeg;base64,${this.props.image.item}`}
        alt=""
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.image.toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    imageActions: bindActionCreators(ImageActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
