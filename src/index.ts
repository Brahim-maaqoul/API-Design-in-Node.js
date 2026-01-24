import './crypto.ts'
import { env } from '../env.ts'
import { app } from './server.ts'
const { SignJWT } = await import('jose')


app.listen(env.PORT, () => {
    console.log(`server running on port: ${env.PORT}`)
})