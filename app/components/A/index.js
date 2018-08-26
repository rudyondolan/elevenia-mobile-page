/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { split, head, includes } from 'lodash';

function A(props) {
  const { to, ...rest } = props;
  const splittedUrl = split(to, '/');
  const first = head(splittedUrl);

  return includes(first, 'http') ? (
    <a href={to} {...rest}>
      {props.children}
    </a>
  ) : (
    <Link to={to} {...rest} />
  );
}

A.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};

export default A;
