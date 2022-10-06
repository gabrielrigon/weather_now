class Api::ForecastsController < Api::BaseController
  include Api::ForecastsHelper

  before_action :validate_params, only: :index

  def index
    city = forecast_params.dig(:city)
    render(json: ::ThirdParty::OpenWeatherMapService.new(city).fetch_raw)
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
