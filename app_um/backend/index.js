const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/cors'), {
  origin: true
});

fastify.get('/', async () => {
  return { app: 'APP UM', status: 'ok' };
});

fastify.listen({ port: 3000, host: '0.0.0.0' });