import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import A from 'components/A';

const CopyRightWrapper = styled.div`
  padding: 20px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  line-height: 1.67;
  color: #999;
  text-align: center;
  letter-spacing: normal;
`;

const Section = styled.div`
  padding: 0;
  margin: 0;
  background: 0 0;
  border: none;
`;

const FooterLink = styled(A)`
  display: block;
  padding-bottom: 8px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  line-height: 1.54;
  color: #666;
  text-align: center;
  letter-spacing: normal;
`;

const Top = styled(FooterLink)`
  text-decoration: underline;
  span {
    display: block;
  }
`;

const Middle = styled(FooterLink)`
  text-decoration: none;
  width: 181px;
  padding: 8px 11px;
  margin: auto;
  margin-bottom: 8px;
  border: 1px solid #606060;
  border-radius: 2px;
`;

const Bottom = styled.span``;

function CopyRight({ links }) {
  return (
    <CopyRightWrapper>
      <Section>
        <Top to={links.ppl}>
          <span>Perjanjian Penggunaan Layanan</span>
        </Top>
        <Middle to={links.desktop}>Ganti ke versi desktop</Middle>
        <Bottom>
          Copyright © 2014-2018 PT XL Planet. All Rights Reserved.
        </Bottom>
      </Section>
    </CopyRightWrapper>
  );
}

CopyRight.defaultProps = {
  links: {
    ppl: 'http://m.elevenia.co.id/document/termsDocIn1.do',
    desktop: 'http://www.elevenia.co.id',
  },
};

CopyRight.propTypes = {
  links: PropTypes.object,
};

export default CopyRight;
