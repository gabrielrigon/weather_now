class Api::Private::UsersController < Api::Private::BaseController
  include Api::Private::UsersHelper

  before_action :validate_params, only: %i[authenticate create]
  before_action :find_user_by_id, only: :authenticate

  def authenticate
    user = User.find_by(email: user_params.dig(:email))

    if !user || !user.authenticate(user_params.dig(:password))
      return head :unauthorized
    end

    render json: {
      token: ::Auth::TokenService.new(user.id).create_jwt_token
    }
  end

  def create
    user = User.new
    user.assign_attributes(user_params)

    if user.save
      head :created
    else
      render_error(:unprocessable_entity, user.errors)
    end
  end

  private

  def find_user_by_id
    @user = User.find_by(email: user_params.dig(:email))
    return head :unauthorized unless @user
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def validate_params
    return if valid_params?
    render_error(:bad_request, "check if the :email or :password was sent correctly")
  end
end
