import React from 'react';
import styled from 'styled-components';

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
`;

function MenuBox(props) {
  return (
    <MenuBoxWrapper>
      <ul>
      </ul>
    </MenuBoxWrapper>
  );
}

export default MenuBox;
