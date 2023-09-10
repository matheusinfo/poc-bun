import bun from 'bun'
import env from './env'
import routes from './routes'

bun.serve({
  port: env.PORT,
  development: true,
  fetch(req) {
    return routes(req)
  },
});

console.log(`Server running at http://localhost:${env.PORT}`)


