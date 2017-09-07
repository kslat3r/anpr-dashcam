import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DetailsActions from '../../actions/details';
import './Details.css';

class Details extends Component {
  static propTypes = {
    details: PropTypes.object.isRequired,

    detailsActions: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.detailsActions.listen();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.details.item.numberPlate !== nextProps.details.item.numberPlate) {
      return true;
    }

    return false;
  }

  render() {
    if (!this.props.details.item) {
      return null;
    }

    console.log(this.props.details.item);

    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details.toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsActions: bindActionCreators(DetailsActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
