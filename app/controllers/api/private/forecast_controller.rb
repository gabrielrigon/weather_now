class Api::Private::ForecastController < Api::Private::BaseController
  def index
    render json: {
      data: {
        forecast: {
          city: 'São Paulo',
          temperature: {
            fahrenheit: nil,
            celsius: nil
          }
        }
      }
    }
  end
end
