import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import CopyRight from './CopyRight';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <CopyRight />
    </Wrapper>
  );
}

export default Footer;
