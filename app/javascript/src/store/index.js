import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducers from '../reducers'

export const store = createStore(appReducers, applyMiddleware(thunk))
