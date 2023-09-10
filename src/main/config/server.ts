import bun from 'bun'
import env from './env'
import routes from './routes'
import { adaptRoute } from '../adapter';

bun.serve({
  port: env.PORT,
  development: true,
  fetch(req) {
    return adaptRoute(routes)(req)
  },
});

console.log(`Server running at http://localhost:${env.PORT}`)


