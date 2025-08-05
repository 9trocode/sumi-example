
import { z } from 'zod';
import { createRoute } from '@bethel-nz/sumi/router';
import { ValidationContext } from '@bethel-nz/sumi/router';

const querySchema = z.object({
  name: z.string().optional().default('World'),
});

export default createRoute({
  get: {
    schema: {
      query: querySchema,
    },
    handler: (c: ValidationContext<{ query: typeof querySchema }>) => {
      const { name } = c.valid.query!;
      return c.json({
        message: `Hello, ${name}! This is the root route with validation.`,
      });
    },
  },
});

  