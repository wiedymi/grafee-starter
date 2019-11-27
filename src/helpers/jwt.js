import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const jwtVerify = token => {
  try {
    jwt.verify(token, JWT_SECRET)
    return true
  } catch (err) {
    return false
  }
}
