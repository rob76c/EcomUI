Api: If building with npm run dev does not work use : "NODE_ENV=dev node --import=tsx --watch --env-file=.env src/index.ts"


To build with genezio, if error message: [ERR_MODULE_NOT_FOUND]: Cannot find module '/tmp/package/dist/src/db/usersSchema' imported from /tmp/package/dist/src/db/ordersSchema.js at finalizeResolution.
In the orderSchema.ts, change:
`import { usersTable } from "./usersSchema";
import { productsTable } from "./productsSchema";`
To:
`import { usersTable } from "./usersSchema.js";
import { productsTable } from "./productsSchema.js";`
Then build.