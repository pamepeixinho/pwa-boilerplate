import 'whatwg-fetch';

const parseJSON = (response) =>
  response.text().then(
    (text) => text ? JSON.parse(text) : {}
  );

const getError = (response) => {
  const error = new Error(response.statusText);
  error.response = response;
  return error;
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = getError(response);
  throw error;
};

const request = (url, options) =>
  fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);

export const post = (url, body, extraHeaders, extraOptions) => {
  const options = buildBody('POST', body, extraHeaders, extraOptions);
  return request(url, options);
};

export const buildBody = (method, body, extraHeaders, extraOptions) => ({
  method,
  body: JSON.stringify(body),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...extraHeaders,
  },
  ...extraOptions,
});

export default Request;
