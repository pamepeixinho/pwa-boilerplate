import { search as searchEndpoint } from 'api/searchTest';

import { SEARCH_TEST } from './constants';

export const search = () => ({
  type: SEARCH_TEST,
  promise: searchEndpoint('trump'),
});
