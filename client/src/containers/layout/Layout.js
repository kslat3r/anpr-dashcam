import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Image from '../image/Image';
import Details from '../details/Details';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={9}>
            <Image />
          </Col>
          <Col xs={3}>
            <Details />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Layout;
