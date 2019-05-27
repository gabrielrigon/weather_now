class Api::Private::FavoritesController < Api::Private::BaseController
  include Api::Private::FavoritesHelper

  before_action :validate_params, only: :create

  def create
    favorite = Favorite.new
    favorite.assign_attributes(favorite_params)

    if favorite.save
      head :created
    else
      render_error(:unprocessable_entity, favorite.errors)
    end
  end

  def destroy
    favorite = Favorite.find_by(id: params[:id])
    return head :not_found unless favorite

    if favorite.destroy
      head :ok
    else
      render_error(:unprocessable_entity, favorite.errors)
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :city)
  end

  def validate_params
    return if valid_create_params?
    render_error(:bad_request, "check if the :user_id or :city was sent correctly")
  end
end
