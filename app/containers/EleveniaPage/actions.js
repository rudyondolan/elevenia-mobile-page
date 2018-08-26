/*
 *
 * EleveniaPage actions
 *
 */

import { FILTER_DATA } from './constants';

export function filterData(name) {
  return {
    type: FILTER_DATA,
    name,
  };
}
