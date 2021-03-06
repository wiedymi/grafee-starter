import { createValidator, validate } from '@grafee/core'

export const userValidator = createValidator([
  validate('username').isLength({ msg: 'username is invalid', options: { min: 3, max: 20 } }),
])
