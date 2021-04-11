const withTranspileModule = require('next-transpile-modules')([
  '@thot/components',
]) // pass the modules you would like to see transpiled

module.exports = withTranspileModule()
