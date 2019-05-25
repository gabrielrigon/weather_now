import { forecastActions } from '../actions'

const {
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} = forecastActions

const initialState = () => ({
  city: '',
  forecast: {
    fahrenheit: '',
    celsius: ''
  },
  loading: false,
  error: false
})

const forecast = (state = initialState(), action = {}) => {
  switch (action.type) {
    case FETCH_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }

    case FETCH_FORECAST_SUCCESS:
      const { city, forecast } = action.payload

      return {
        ...state,
        city,
        forecast,
        loading: false,
        error: false
      }

    case FETCH_FORECAST_FAILURE:
      return {
        ...state,
        city: '',
        forecast: {},
        loading: false,
        error: true
      }

    default:
      return state
  }
}

export default forecast
