class Api::Private::ForecastController < Api::Private::BaseController
  DEFAULT_CITY = "São Paulo"

  def index
    temperature = ::ThirdParty::OpenWeatherMap.new(DEFAULT_CITY).fetch_formatted
    return head :failed_dependency if temperature.blank?

    render json: {
      data: {
        forecast: {
          city: "São Paulo",
          temperature: temperature
        }
      }
    }
  end
end
