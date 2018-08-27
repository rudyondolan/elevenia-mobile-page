import React from 'react';
import styled from 'styled-components';

import A from 'components/A';

const MenuBoxWrapper = styled.div`
  position: relative;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
  list-style: none;
  z-index: 1;

  ul {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    box-sizing: content-box;
    padding: 0;
    margin: 0;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
  }

  li {
    width: auto;
    flex: 1;
    -webkit-box-flex: 1;
    display: flex;
    text-align: center;
    background: #fff;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
  }

  a {
    margin-left: 0;
    color: #ff7d1d;
    border-bottom: 2px solid #ff7d1d;
    padding: 0;
    margin: 0 8px;
    font-weight: 400;
    line-height: 60px;
    text-decoration: none;
    width: 100%;
    text-overflow: unset;
    letter-spacing: 1px;
    display: block;
    height: 48px;
    overflow: hidden;
    white-space: nowrap;
  }
`;

function MenuBox(props) {
  return (
    <MenuBoxWrapper>
      <ul>
        <li>
          <A to="">Pulsa</A>
        </li>
      </ul>
    </MenuBoxWrapper>
  );
}

export default MenuBox;
