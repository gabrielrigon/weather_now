module Api::Private::UsersHelper
  def valid_params?
    user_params.dig(:email).present? &&
      user_params.dig(:password).present?
  end
end
