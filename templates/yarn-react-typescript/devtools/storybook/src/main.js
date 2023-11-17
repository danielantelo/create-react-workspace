const { workspaces } = require('../../../package.json');
const path = require('path');
const { mergeConfig } = require('vite');

function getPackageStories() {
  const rootDir = path.resolve(__dirname, '../../..');
  return workspaces
    .filter((workspace) => workspace !== 'devtools/*')
    .map((workspace) => path.relative(__dirname, path.join(rootDir, workspace, '**/*.stories.tsx')));
}

module.exports = {
  stories: ['./stories/*.stories.tsx', ...getPackageStories()],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      fastRefresh: true,
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: '',
      build: {
        target: ['chrome103'],
        minify: false,
        sourcemap: false,
      },
    });
  },
};
