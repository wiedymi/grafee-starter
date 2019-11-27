import { GrafeeServer } from '@grafee/core'
import { setup } from '@grafee/mongo'
import { auth } from '@/passport'
import schema from '@/modules'
import access from '@/access'

setup('mongodb://localhost:27017/grafee?authSource=admin&w=majority')

const middlewares = [auth, access]

const application = GrafeeServer({
  schema,
  middlewares,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    schemaTag: 'production',
  },
})

const port = process.env.PORT || 4040
application.listen({
  port,
  host: '0.0.0.0',
})

console.log(`🚀  GraphQL: http://localhost:${port + application.path}`)
console.log(`🚀  Subscriptions: ws://localhost:${port + application.subscriptions}`)
