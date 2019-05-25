class Api::Private::ForecastController < Api::Private::BaseController
  DEFAULT_CITY = "São Paulo"

  def index
    forecast = ::ThirdParty::OpenWeatherMap.new(DEFAULT_CITY).fetch_formatted
    return head :failed_dependency if forecast.blank?

    render json: {
      payload: {
        city: DEFAULT_CITY,
        forecast: forecast
      }
    }
  end
end
