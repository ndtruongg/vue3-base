import { LRUCache } from 'lru-cache'
import { hash as ohash } from 'ohash'
import http from './http'

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60 // 2 hour
})

export const _fetchData = async (
  url: string,
  params: Record<string, string | number | boolean | undefined>
): Promise<any> => {
  const hash = ohash([url, params])

  if (!promiseCache.has(hash)) {
    promiseCache.set(
      hash,
      await http
        .get(url, { params })
        .then((res) => {
          return res.data
        })
        .catch((e) => {
          promiseCache.delete(hash)
          throw e
        })
    )
  }

  return promiseCache.get(hash)!
}
