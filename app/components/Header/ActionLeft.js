import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import A from 'components/A';
import Icon from './Icon';

export const HeaderActionLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  a {
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    background: 0 0;
    border: none;
    outline: 0;
    -webkit-appearance: none;
  }
`;

function ActionLeft(props) {
  const { url } = props;
  return (
    <HeaderActionLeft>
      <A to="/">
        <Icon src={url} alt="burgerIcon" />
      </A>
    </HeaderActionLeft>
  );
}

ActionLeft.defaultProps = {
  url: 'https://m.elevenia.co.id/assets/images/header-menu-black.svg',
};

ActionLeft.propTypes = {
  url: PropTypes.string,
};

export default ActionLeft;
