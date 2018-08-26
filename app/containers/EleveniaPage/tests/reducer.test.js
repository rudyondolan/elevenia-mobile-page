import { fromJS } from 'immutable';
import eleveniaPageReducer from '../reducer';

describe('eleveniaPageReducer', () => {
  it('returns the initial state', () => {
    expect(eleveniaPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
