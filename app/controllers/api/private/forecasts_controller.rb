class Api::Private::ForecastsController < Api::Private::BaseController
  include Api::ForecastsHelper

  before_action :validate_params, only: :index

  def index
    city = forecast_params.dig(:city)
    result = ::ThirdParty::OpenWeatherMapService.new(city).fetch_formatted

    if result.dig(:status) == :success 
      return render json: {
        payload: {
          city: city,
          forecast: result.dig(:data)
        }
      }
    end

    render_error(result.dig(:code), result.dig(:message))
  end

  protected

  def forecast_params
    params.permit(:city)
  end

  private
  
  def validate_params
    return if valid_index_params?
    render_error(:bad_request, "missing param :city")
  end
end
