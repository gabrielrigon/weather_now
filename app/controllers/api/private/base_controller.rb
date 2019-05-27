class Api::Private::BaseController < Api::BaseController
  before_action :authenticate_user

  private

  def authenticate_user
    authorization = request.headers["Authorization"]
    token_data    = ::Auth::TokenService.new(authorization).open_jwt_token
    user_id       = token_data&.dig("data")

    # return head :unauthorized unless User.find_by(id: user_id)
  end
end
