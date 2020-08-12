module.exports = {
    urls: {
      app: 'http://localhost:8080',
      api:{
          nodeApi:'http://localhost:4000',
          pythonApi: 'http://localhost:5300'
      },
      ws: 'http://localhost:4002',
      gql: 'http://localhost:4002/v1/graphql',
      gqlRealtime: 'ws://localhost:4002/v1/graphql',
    },
    // DEBUG, INFO, WARN, ERROR, OFF
    logLevel: 'DEBUG',
};