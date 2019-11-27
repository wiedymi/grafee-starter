import { createModule } from '@grafee/core'
import { userService } from '@/services'
import * as typeDefs from './schema.graphql'
import * as resolvers from './resolvers'

export default createModule({
  typeDefs,
  resolvers,
  context: {
    db: userService,
  },
})
