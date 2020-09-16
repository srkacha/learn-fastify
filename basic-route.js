async function routes(fastify, options){
    fastify.get('/', async (request, response) => {
        return {hello: 'world'};
    });
};

module.exports = routes;