import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DetailsActions from '../../actions/details';
import * as ImageActions from '../../actions/image';
import Loading from '../../components/loading/Loading';
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
    details: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,

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
        {!this.props.image.item ? (
          <Loading />
        ) : null}

        {this.props.image.item ? (
          <Grid>
            <Row>
              <Col xs={9} className="image-cont">
                <Image data={this.props.image.item} />
                <Numberplate details={this.props.details} />
              </Col>
              <Col xs={3}>
                <Details details={this.props.details} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={6}>
                    <Make details={this.props.details} />
                  </Col>

                  <Col xs={6}>
                    <Model details={this.props.details} />
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <MOT details={this.props.details} />
                  </Col>

                  <Col xs={6}>
                    <Tax details={this.props.details} />
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
    details: state.details.toJS(),
    image: state.image.toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailsActions: bindActionCreators(DetailsActions, dispatch),
    imageActions: bindActionCreators(ImageActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

