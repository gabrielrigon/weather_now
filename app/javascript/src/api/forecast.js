import { proxy } from './index'

export const fetch = city => {
  return proxy.get('/forecasts', {
    params: {
      city
    }
  })
}