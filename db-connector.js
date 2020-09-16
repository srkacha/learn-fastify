const fastifyPlugin = require('fastify-plugin');
const appConfig = require('./config/config').appConfig;

async function dbConnector(fastify, options){
    fastify.register(require('fastify-mongodb'), {
        url: appConfig.dbAddress
    })
}

// When we wrap the plugin function with fastifyPlugin, it exposes the
// decorators and hooks, declared in the plugn to the parentScope
module.exports = fastifyPlugin(dbConnector);