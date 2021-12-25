const fastify = require('fastify')({
  logger: true,
});

const productRoutes = require('./routes/products.routes');
const swagger = require('./utils/swagger');

require('./utils/database');

fastify.register(require('fastify-swagger'), swagger.options);

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

productRoutes.forEach((route) => {
  fastify.route(route);
});

// Server init
const start = async () => {
  await fastify.listen(3000);
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

start();
