import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import A from 'components/A';
import Icon from './Icon';
import { HeaderActionLeft } from './ActionLeft';

const HeaderActionRight = styled(HeaderActionLeft)`
  right: 0;
  left: initial;
  display: flex;
`;

const CartNumber = styled.span`
  position: absolute;
  top: 9px;
  right: 10px;
  display: block;
  min-width: 16px;
  height: 16px;
  padding: 0 5px;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  color: #fff;
  text-align: center;
  background-color: #ff7d1d;
  border-radius: 8px;
`;

function ActionRight(props) {
  const { urls } = props;
  return (
    <HeaderActionRight>
      <A to="/search">
        <Icon src={urls.search} alt="iconSearch" />
      </A>
      <A to="/cart">
        <Icon src={urls.cart} alt="iconCart" />
        <CartNumber>0</CartNumber>
      </A>
    </HeaderActionRight>
  );
}

ActionRight.defaultProps = {
  urls: {
    search: 'https://m.elevenia.co.id/assets/images/header-search-black.svg',
    cart: 'https://m.elevenia.co.id/assets/images/header-cart-black.svg',
  },
};

ActionRight.propTypes = {
  urls: PropTypes.object,
};

export default ActionRight;
