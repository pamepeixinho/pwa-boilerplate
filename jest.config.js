module.exports = {
  moduleDirectories: [
    'app',
    'node_modules',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/internals/mocks/image.js', // eslint-disable-line
  },
  setupFiles: [
    '<rootDir>/internals/jest/setup.js',
  ],
  testRegex: 'tests/.*\\.test\\.(js|tsx?)$',
  transform: {
    '.(js|jsx)': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
