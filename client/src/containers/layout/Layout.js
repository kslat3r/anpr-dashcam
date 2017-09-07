import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DetailsActions from '../../actions/details';
import * as ImageActions from '../../actions/image';
import Image from '../../components/image/Image';
import Details from '../../components/details/Details';
import Numberplate from '../../components/numberplate/Numberplate';
import Make from '../../components/make/Make';
import Model from '../../components/model/Model';
import MOT from '../../components/mot/MOT';
import Tax from '../../components/tax/Tax';
import './Layout.css';

class Layout extends Component {
  static propTypes = {
    details: PropTypes.object,
    image: PropTypes.string,

    detailsActions: PropTypes.object.isRequired,
    imageActions: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.detailsActions.listen();
    this.props.imageActions.listen();
  }

  render() {
    return (
      <div>
        {this.props.image ? (
          <Grid>
            <Row>
              <Col xs={9}>
                <Image data={this.props.image} />
              </Col>
              <Col xs={3}>
                <Details data={this.props.details} />
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                <Row>
                  <Col xs={12}>
                    <Numberplate data={this.props.details} />
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Make data={this.props.details} />
                  </Col>

                  <Col xs={6}>
                    <Model data={this.props.details} />
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <MOT data={this.props.details} />
                  </Col>

                  <Col xs={6}>
                    <Tax data={this.props.details} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details.toJS().item,
    image: state.image.toJS().item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsActions: bindActionCreators(DetailsActions, dispatch),
    imageActions: bindActionCreators(ImageActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

