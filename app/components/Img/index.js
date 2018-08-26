import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const { src, alt, ...rest } = props;
  return <img src={src} alt={alt} {...rest} />;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
