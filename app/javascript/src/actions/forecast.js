import { forecastApi } from '../api'

export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE'

export const fetch = () => {
  return dispatch => {
    dispatch({ type: FETCH_FORECAST_REQUEST })

    return forecastApi.fetch()
      .then(res => {
        const { data: { payload } } = res
        dispatch({ type: FETCH_FORECAST_SUCCESS, payload })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_FORECAST_FAILURE })
      })
  }
}
