import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import A from 'components/A';
import Img from 'components/Img';

const HeaderLogo = styled.div`
  padding-top: 5px;
  width: 120px;
  height: 50px;
  margin-left: 60px;
`;

const EleveniaLogo = styled(Img)`
  display: block;
  width: 120px;
  height: 30px;
  height: 30px;
`;

function Logo(props) {
  const { url } = props;
  return (
    <HeaderLogo>
      <A to="/">
        <EleveniaLogo src={url} alt="eleveniaLogo" />
      </A>
    </HeaderLogo>
  );
}

Logo.defaultProps = {
  url: 'https://m.elevenia.co.id/assets/images/header-logo.png',
};

Logo.propTypes = {
  url: PropTypes.string,
};

export default Logo;
