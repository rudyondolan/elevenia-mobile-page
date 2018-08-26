/**
 *
 * EleveniaPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { find } from 'lodash';

import NavBar from 'components/NavBar';
import Slider from 'components/Slider';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEleveniaPage from './selectors';
import reducer from './reducer';
import { filterData } from './actions';
import saga from './saga';
import messages from './messages';

const Wrapper = styled.main`
  position: relative;
  min-height: 500px;
`;

const Container = styled.div`
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
  border: 0;
`;

/* eslint-disable react/prefer-stateless-function */
export class EleveniaPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      banner: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    const menu = this.findData('menuGNBList');
    const banner = this.findData('billboard banner');
    // eslint-disable-next-line
    this.setState(() => ({
      menu: menu.menuGNBList,
      banner: banner.bannerList,
    }));
  }

  findData(name) {
    const { data } = this.props;
    return find(data, d => d.name === name);
  }

  render() {
    const { menu, banner } = this.state;

    return (
      <Wrapper>
        <Helmet>
          <title>EleveniaPage</title>
          <meta name="description" content="Description of EleveniaPage" />
        </Helmet>
        <article>
          <Container>
            <NavBar data={menu} />
            <Slider data={banner} />
          </Container>
        </article>
      </Wrapper>
    );
  }
}

EleveniaPage.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectEleveniaPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eleveniaPage', reducer });
const withSaga = injectSaga({ key: 'eleveniaPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EleveniaPage);
