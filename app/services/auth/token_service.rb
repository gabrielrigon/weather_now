class Auth::TokenService
  JWT_SECRET = ENV["JWT_SECRET"]

  def initialize(data)
    @data = data
  end

  def create_jwt_token
    JWT.encode data_with_exp, JWT_SECRET, 'HS256'
  end

  private

  def data_with_exp
    { data: @data, exp: (Time.now + 7.days).to_i }
  end
end