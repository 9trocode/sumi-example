
import { Next } from 'hono';
import type { SumiContext } from '@bethel-nz/sumi/types';
import { createMiddleware } from '@bethel-nz/sumi/router';

/**
 * Example Middleware using createMiddleware.
 * Logs request start and end with duration.
 */
export default createMiddleware({
  _: async (c: SumiContext, next: Next) => {
    const start = Date.now();
    console.log(
      `-> ${c.req.method} ${new URL(c.req.url).pathname}`
    );
    await next();
    const duration = Date.now() - start;
    console.log(
      `<- ${c.req.method} ${new URL(c.req.url).pathname} (${c.res.status}) ${duration}ms`
    );
  },
});
    