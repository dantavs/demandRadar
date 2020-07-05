import { Application } from "https://deno.land/x/oak/mod.ts"
import { config } from "https://deno.land/x/dotenv/mod.ts"
import router from '../../routes/routes.ts'

const HOST = config().HOST
const PORT = config().PORT

const app = new Application

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`API is running:${HOST}:${PORT}`)

await app.listen(`${HOST}:${PORT}`)