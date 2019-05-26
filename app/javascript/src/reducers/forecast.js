import { forecastActions } from '../actions'

const {
  CHANGE_SEARCH_TERM,
  FETCH_FORECAST_REQUEST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} = forecastActions

const initialState = () => ({
  searchTerm: '',
  city: '',
  forecast: {
    fahrenheit: '',
    celsius: ''
  },
  loading: false,
  error: ''
})

const forecast = (state = initialState(), action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      const { term:searchTerm } = action

      return {
        ...state,
        searchTerm
      }

    case FETCH_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }

    case FETCH_FORECAST_SUCCESS:
      const { city, forecast } = action.payload

      return {
        ...state,
        city,
        forecast,
        loading: false,
        error: ''
      }

    case FETCH_FORECAST_FAILURE:
      const { error } = action

      return {
        ...state,
        city: '',
        forecast: {},
        loading: false,
        error
      }

    default:
      return state
  }
}

export default forecast
