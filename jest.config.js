const javascriptRoot = '<rootDir>/app/javascript/components';
// const {defaults} = require('jest-config');

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${javascriptRoot}/__mocks__/fileMock.js`,
    '\\.(css|less)$': `${javascriptRoot}/__mocks__/styleMock.js`,
  },
  transformIgnorePatterns: [
    '/node_modules/antd/es/layout/style/index.js',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  // verbose: true,
};
