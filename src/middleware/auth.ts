import { ACCESS_TOKEN } from '@/constants/common.const'
import { SCREEN } from '@/router/screen'
import { getCookie } from '@/utils/token'

export default async function auth(to: any, from: any, next: any) {
  const token = getCookie(ACCESS_TOKEN)

  // TODO: verify token

  if (to.name !== SCREEN.login.name && !token) next({ name: SCREEN.login.name })
  else next()
}
