# Sumi demo

A blazing fast web API built with [Sumi](https://github.com/bethel-nz/sumi) 🔥

## Getting Started

### Development
```bash
bun run dev
```

### Project Structure
```
├── routes/                # API routes (file-based routing)
│   ├── index.ts          # GET /
│   └── users/            # /users/* routes
├── middleware/           # Global middleware
│   └── index.ts         # Request logging
├── src/
│   └── server.ts        # Application entry point
└── sumi.config.ts       # Sumi configuration
```

### Adding Routes
Create files in the `routes/` directory:

```typescript
// routes/hello.ts
import { createRoute } from '@bethel-nz/sumi/router';

export default createRoute({
  get: (c) => c.json({ message: 'Hello World!' })
});
```

### Validation with Zod
```typescript
import { z } from 'zod';
import { createRoute } from '@bethel-nz/sumi/router';

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email()
});

export default createRoute({
  post: {
    schema: { json: userSchema },
    handler: (c) => {
      const userData = c.valid.json;
      return c.json({ success: true, user: userData });
    }
  }
});
```

## Deployment
Build and deploy your Sumi app anywhere that supports Bun or Node.js.
