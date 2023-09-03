import { SCREEN_LOGIN, SCREEN_HOME } from '@/constants/screen.const'
import { getAccessToken } from '@/utils/token'

export default async function auth(to: any, from: any, next: any) {
  const token = getAccessToken()

  if (to.name === SCREEN_LOGIN) {
    if (!token) {
      return next()
    }
    return next({ name: SCREEN_HOME })
  }

  if (SCREEN_LOGIN !== to.name) {
    if (!token) {
      return next({ name: SCREEN_LOGIN })
    }
  }
  return next()
}
