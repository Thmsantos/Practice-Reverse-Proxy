const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/cors'), {
  origin: true
});

fastify.get('/', async () => {
  return { app: 'APP DOIS', status: 'ok' };
});

fastify.listen({ port: 3001, host: '0.0.0.0' });