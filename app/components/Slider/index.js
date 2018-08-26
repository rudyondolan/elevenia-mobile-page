/**
 *
 * Slick
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { map } from 'lodash';
import { FormattedMessage } from 'react-intl';

import Img from 'components/Img';
import Button from './Button';
import SliderWrapper from './Wrapper';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
function Slider(props) {
  const { data, ...rest } = props;
  const settings = {
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    dots: true,
    lazyLoad: true,
    infinite: true,
  };

  return (
    <SliderWrapper>
      <Slick {...settings} {...rest}>
        {map(data, value => (
          <Img
            key={value.displayName}
            src={value.imageLarge}
            alt={value.displayName}
          />
        ))}
      </Slick>
      <Button to="/">
        <FormattedMessage {...messages.header} />
      </Button>
    </SliderWrapper>
  );
}

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Slider.defaultProps = {
  data: [
    {
      displayName: 'TOKEN',
      imageLarge:
        'https://image.elevenia.co.id/browsing/banner/2018/08/20/8049/2018082011392044965_9782429_1.jpg',
    },
  ],
};

export default Slider;
