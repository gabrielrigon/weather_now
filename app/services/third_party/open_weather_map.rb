class ThirdParty::OpenWeatherMap
  URL = ENV["OPEN_WEATHER_MAP_URL"]

  def initialize(city)
    @city = URI.encode(city)
  end

  def fetch_formatted
    @response = JSON.parse(make_request)
    parsed_data
  end

  def fetch_raw
    JSON.parse(make_request)
  end

  private

  def make_request
    key = @city.parameterize
    url_with_options = "#{URL}&q=#{@city}"

    Rails.cache.fetch("third_party/open_weather_map?city=#{key}", expires_in: 1.minute) do
      begin
        HTTParty.get(url_with_options).to_json
      rescue HTTParty::Error, SocketError => e
        p "Could not retrieve data from OpenWeatherApi, connection error"
        { cod: 424, message: "connection error" }.to_json 
      end
    end
  end

  def parsed_data
    return handled_error(@response) if @response.dig("cod").to_i >= 300

    fahrenheit_temp = @response.dig("list").first.dig("main", "temp")
    celsius_temp = ::Weather::Converters::FahrenheitService.new(fahrenheit_temp).to_celsius

    {
      status: :success,
      data: {
        fahrenheit: fahrenheit_temp.round,
        celsius: celsius_temp
      }
    }
  end

  def handled_error(response)
    { 
      status: :error,
      code: response.dig("cod"),
      message: response.dig("message")
    }
  end
end