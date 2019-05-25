import { forecastActions } from '../actions'

const {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} = forecastActions

const initialState = () => ({
  city: '--',
  forecast: {
    fahrenheit: '--',
    celsius: '--'
  },
  loading: false,
  error: ''
})

const forecast = (state = initialState(), action = {}) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      return state

    case FETCH_FORECAST_SUCCESS:
      return state

    case FETCH_FORECAST_FAILURE:
      return state

    default:
      return state
  }
}

export default forecast
