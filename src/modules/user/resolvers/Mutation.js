const createUser = async (root, { email, username, password }, { db }) => {
  const isExist = await db.get({ email })

  if (isExist) {
    throw new Error('The email is used already')
  }

  const createdUser = await db.create({
    email,
    username,
    password,
  })

  return createdUser
}

export const Mutation = {
  createUser,
}
