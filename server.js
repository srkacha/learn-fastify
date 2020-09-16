const appConfig = require('./config/config').appConfig;
const fastify = require('fastify')({
    logger: true
});

// Instead of declaring a route, we register a plugin with routes
fastify.register(require('./db-connector'));
fastify.register(require('./basic-route'));

// Running the server
// Config params are set in /config/config.js
fastify.listen(appConfig.port, appConfig.address, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    fastify.log.info(`Server is running on address: ${address}`);
});

