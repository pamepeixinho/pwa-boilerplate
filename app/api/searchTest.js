import { post } from './request';

export const search = (text) => {
  const endpoint = 'https://backend-bbb.herokuapp.com/search/by-domain';
  return post(endpoint, { query: text });
};
