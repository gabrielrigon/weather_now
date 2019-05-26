import { forecastApi } from '../api'

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM'
export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE'

export const fetch = city => {
  return dispatch => {
    dispatch({ type: FETCH_FORECAST_REQUEST })

    return forecastApi.fetch(city)
      .then(res => {
        const { data: { payload } } = res
        dispatch({ type: FETCH_FORECAST_SUCCESS, payload })
      })
      .catch(err => {
        const error = err.response.status
        dispatch({ type: FETCH_FORECAST_FAILURE, error })
      })
  }
}

export const changeTerm = term => {
  return dispatch => {
    dispatch({ type: CHANGE_SEARCH_TERM, term })
  }
}
