import { _fetchData } from '@/utils/cache'

export const getProfile = async <T>() => {
  return await _fetchData('/login', {})
}
