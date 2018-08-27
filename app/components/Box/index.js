/**
 *
 * Box
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import BoxWrapper from './Wrapper';
import MenuBox from './Menu';
import messages from './messages';

function Box() {
  return (
    <BoxWrapper>
      <MenuBox />
    </BoxWrapper>
  );
}

Box.propTypes = {};

export default Box;
