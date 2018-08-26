import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';

import HeaderActionLeft from './ActionLeft';
import HeaderLogo from './Logo';
import HeaderActionRight from './ActionRight';

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
`;

/* eslint-disable react/prefer-stateless-function */
class EleveniaHeader extends React.Component {
  render() {
    return (
      <Header>
        <HeaderActionLeft />
        <HeaderLogo />
        <HeaderActionRight />
      </Header>
    );
  }
}

EleveniaHeader.defaultProps = {};

EleveniaHeader.propTypes = {};

export default EleveniaHeader;
