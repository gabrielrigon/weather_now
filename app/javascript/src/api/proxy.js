import axios from 'axios'
import { env } from '../config'

const proxy = axios.create({
  baseURL: ((env || {}).api || {}).url,
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000
})

export default proxy