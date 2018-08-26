import styled from 'styled-components';

import A from 'components/A';

const Button = styled(A)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 11;
  display: block;
  padding: 5px 10px 5px 20px;
  font-size: 12px;
  color: #fff;
  background: #606060;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  opacity: 0.5;
`;

export default Button;
