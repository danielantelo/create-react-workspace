const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': path.resolve(__dirname, './support/fileMock.js'),
  },
  setupFilesAfterEnv: [path.resolve(__dirname, './support/setupTests.js')],
};
