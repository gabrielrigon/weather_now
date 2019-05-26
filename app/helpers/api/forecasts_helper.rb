module Api::ForecastsHelper
  def valid_index_params?
    forecast_params.dig(:city).present?
  end
end
