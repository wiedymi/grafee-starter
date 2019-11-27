import bcrypt from 'bcrypt'
import { createService, createSchema, addPaginate } from '@grafee/mongo'
import { ROLES } from '@/constants'

const { REGISTERED } = ROLES

const userSchema = createSchema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: REGISTERED,
    },
  },
  { collection: 'users' },
)

addPaginate(userSchema)

const userPreCallback = function(next) {
  const user = this

  return bcrypt.hash(user.password, +process.env.BCRYPT_SALT, function(err, hash) {
    if (err) {
      return next(err)
    }

    user.password = hash

    next()
  })
}

userSchema.pre('save', userPreCallback)
userSchema.pre('update', userPreCallback)

export const userService = createService('User', userSchema)
