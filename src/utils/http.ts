import axios from 'axios'
import type { AxiosInstance } from 'axios'

import router from '@/router'
import { getCookie, removeCookie } from '@/utils/token'
import { ACCESS_TOKEN } from '@/constants/common.const'
import { SCREEN } from '@/router/screen'

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_ENDPOINT,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        const token = getCookie(ACCESS_TOKEN)

        if (token) {
          config.headers['Accept'] = 'application/json'
          config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
      },
      (error) => Promise.reject(error)
    )

    this.instance.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        if (error.response.status === 401) {
          removeCookie(ACCESS_TOKEN)
          return router.push(SCREEN.login.path)
        }

        if (error.response.status === 404) {
          removeCookie(ACCESS_TOKEN)
          return router.push('/khong-tim-thay')
        }

        if (error.response.status === 500) {
          removeCookie(ACCESS_TOKEN)
          return router.push('/loi-he-thong')
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
