import { createShield } from '@grafee/shield'
import { Query, Mutation } from './resolvers'

export default createShield({
  Query,
  Mutation,
})
