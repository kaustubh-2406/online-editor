// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { projectRouter } from "./project";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("project.", projectRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
