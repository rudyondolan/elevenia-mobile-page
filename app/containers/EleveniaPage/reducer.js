/*
 *
 * EleveniaPage reducer
 *
 */

import { fromJS } from 'immutable';
import { FILTER_DATA } from './constants';
import data from './mock/index.json';

export const initialState = fromJS([...data.docs]);

function eleveniaPageReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_DATA:
      return state;
    default:
      return state;
  }
}

export default eleveniaPageReducer;
