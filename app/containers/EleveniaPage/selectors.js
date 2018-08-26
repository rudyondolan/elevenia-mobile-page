import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the eleveniaPage state domain
 */

const selectEleveniaPageDomain = state =>
  state.get('eleveniaPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EleveniaPage
 */

const makeSelectEleveniaPage = () =>
  createSelector(selectEleveniaPageDomain, substate => substate.toJS());

export default makeSelectEleveniaPage;
export { selectEleveniaPageDomain };
