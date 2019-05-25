import { proxy } from './index'

export const fetch = () => {
  return proxy.get('/forecast')
}