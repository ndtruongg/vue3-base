import { _fetchData } from '@/utils/cache'

export const getProfile = async () => {
  return await _fetchData('/login', {})
}
