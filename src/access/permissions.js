import { createRole } from '@grafee/shield'
import { ROLES } from '@/constants'

const { GUEST, ADMIN } = ROLES

export const isAuthenticated = createRole(GUEST, GUEST)

export const isAdmin = createRole(ADMIN)
export const isGuest = createRole(GUEST)
