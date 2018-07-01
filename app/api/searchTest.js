import { post } from './request';

export const search = (text, startDate, endDate) => {
  const endpoint = 'https://backend-bbb.herokuapp.com/search/by-domain';
  return post(endpoint, { query: text, startDate, endDate });
};
