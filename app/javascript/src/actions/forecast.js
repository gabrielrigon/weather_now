export const FETCH_FORECAST_REQUEST = 'FETCH_FORECAST_REQUEST'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE'

export const fetch = () => {
  return dispatch => {
    dispatch({ type: FETCH_FORECAST_REQUEST })
    dispatch({ type: FETCH_FORECAST_SUCCESS })
  }
}
