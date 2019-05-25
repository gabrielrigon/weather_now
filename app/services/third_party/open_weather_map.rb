class ThirdParty::OpenWeatherMap
  URL = ENV['OPEN_WEATHER_MAP_URL']

  def initialize(city)
    @city = URI.encode(city)
  end

  def fetch_formatted
    return {} unless make_request.present?

    @response = JSON.parse(make_request)
    parsed_data
  end

  private

  def make_request
    key = @city.parameterize
    url_with_options = "#{URL}&q=#{@city}"

    Rails.cache.fetch("third_party/open_weather_map?city=#{key}", expires_in: 1.hour) do
      begin
        HTTParty.get(url_with_options).to_json
      rescue HTTParty::Error, SocketError => e
        p "Could not retrieve data from OpenWeatherApi"
        p e

        nil
      end
    end
  end

  def parsed_data
    return {} if @response.dig("list").blank?

    farenheit_temp = @response.dig("list").first.dig("main", "temp")
    celsius_temp = ::Weather::Converters::Fahrenheit.new(farenheit_temp).to_celsius

    return {
      farenheit: farenheit_temp,
      celsius: celsius_temp
    }
  end
end