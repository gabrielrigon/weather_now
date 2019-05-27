module Api::Private::FavoritesHelper
  def valid_create_params?
    favorite_params.dig(:user_id).present? &&
      favorite_params.dig(:city).present?
  end
end
