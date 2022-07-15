const path = require('path');
const { override, addLessLoader, addWebpackPlugin } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');
const WebpackBar = require('webpackbar');

const options = {
  stylesDir: path.join(__dirname, './src/styles'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  mainLessFile: path.join(__dirname, './src/styles/wieldy.less'),
  themeVariables: [
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@heading-color',
    '@nav-dark-bg',
    '@header-text-color',
    '@layout-header-background',
    '@layout-footer-background',
    '@nav-dark-text-color',
    '@hor-nav-text-color',
    '@nav-header-selected-text-color',
  ],
  indexFileName: 'index.html',
  generateOnce: false, // generate color.less on each compilation
};

const overrideProcessEnv = value => config => {
  config.resolve.modules = [path.join(__dirname, 'src')].concat(
    config.resolve.modules
  );
  alias({
    ...configPaths('tsconfig.paths.json'),
  })(config);

  return config;
};

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
  }),
  addWebpackPlugin(new WebpackBar({ profile: true })),
  overrideProcessEnv({
    VERSION: JSON.stringify(require('./package.json').version),
  })
);
