const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@api': 'src/api',
    '@atoms': 'src/components/atoms',
    '@pages': 'src/modules',
    '@images': 'src/assets/img',
    '@global-components': 'src/components/global-components',
    '@store': 'src/store',
  })(config);

  return config;
};