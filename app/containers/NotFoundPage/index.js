/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import H3 from 'components/H3';
import messages from './messages';

const H3Wrapper = styled(H3)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50% 0;

  span {
    color: #404040;
    opacity: 0.6;
  }
`;

export default function NotFound() {
  return (
    <article>
      <H3Wrapper>
        <FormattedMessage {...messages.header} />
      </H3Wrapper>
    </article>
  );
}
