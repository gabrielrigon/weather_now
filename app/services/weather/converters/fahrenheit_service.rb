class Weather::Converters::FahrenheitService
  def initialize(fahrenheit)
    @fahrenheit = fahrenheit.to_f
  end

  def to_celsius
    ((@fahrenheit - 32.0) * (5.0 / 9.0)).round
  end
end