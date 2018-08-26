/**
 *
 * Asynchronously loads the component for EleveniaPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
