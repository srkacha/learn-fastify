const appConfig = require('./config/config').appConfig;
const fastify = require('fastify')({
    logger: true
});

// Declaring a route
fastify.get('/', (request, response) => {
    response.send({hello: 'world'});
});

// Running the server
// Config params are set in /config/config.js
fastify.listen(appConfig.port, appConfig.address, (error, address) => {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
    fastify.log.info(`Server is running on address: ${address}`);
});

