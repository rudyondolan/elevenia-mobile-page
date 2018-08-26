/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map } from 'lodash';

import A from 'components/A';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const NavBarWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  width: 100%;
`;

const Swiper = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const SwipperWrapper = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;

  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-padding-start: 0;

  padding: 0;
  margin: 0;
  background: #fff;
`;

const SwipperItem = styled.li`
  &:first-child {
    padding-left: 16px;
  }

  width: auto;
  padding: 0 8px;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform, -webkit-transform;
  display: flex;
  text-align: center;
  background: #fff;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  a {
    font-weight: 600;
    color: #404040;
    opacity: 0.6;
    width: 100%;
    text-overflow: unset;
    letter-spacing: 1px;

    padding: 0 4px;
    text-decoration: none;
    text-overflow: unset;
    display: block;
    height: 48px;
    overflow: hidden;
    line-height: 48px;
    white-space: nowrap;
    border-bottom: 2px solid #fff;
    background-color: transparent;
  }
`;

function NavBar(props) {
  const { data } = props;
  return (
    <NavBarWrapper>
      <Swiper>
        <SwipperWrapper>
          {map(data, (item, key) => (
            <SwipperItem key={key}>
              <A to={`${item.link}`}>{item.displayName}</A>
            </SwipperItem>
          ))}
        </SwipperWrapper>
      </Swiper>
    </NavBarWrapper>
  );
}

NavBar.defaultProps = {
  data: [
    {
      text: '',
      link: '/',
      displayName: 'Home',
    },
  ],
};

NavBar.propTypes = {
  data: PropTypes.array,
};

export default NavBar;
