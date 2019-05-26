import { proxy } from './index'

export const fetch = city => {
  return proxy.get('/forecast', {
    params: {
      city
    }
  })
}