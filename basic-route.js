// Basic routes
async function routes(fastify, options){
    const collection = fastify.mongo.db.collection('animal');

    fastify.get('/', async (request, response) => {
        return {message: 'Animals'};
    });

    fastify.get('/animals', async (request, response) => {
        const result = await collection.find().toArray();
        if (result.length == 0){
            throw new Error('No documents found!');
        }
        return result;
    });``

    fastify.get('/animals/:name', async (request ,response) => {
        const result = await collection.findOne({name: request.params.name});
        if (result === null){
            throw new Error('No document found!');
        }
        return result;
    });
};

module.exports = routes;