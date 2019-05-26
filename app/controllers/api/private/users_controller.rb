class Api::Private::UsersController < Api::Private::BaseController
  include Api::Private::UsersHelper

  before_action :validate_params, only: :create

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

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def validate_params
    return if valid_params?
    render_error(:bad_request, "check if the :email or :password was sent correctly")
  end
end
