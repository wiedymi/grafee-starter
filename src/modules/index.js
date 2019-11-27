import { createModule } from '@grafee/core'
import userModule from './user'

const { schema } = createModule({
  name: 'app',
  imports: [userModule],
})

export default schema
