import styled from 'styled-components';

import Img from 'components/Img';

const Icon = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default Icon;
