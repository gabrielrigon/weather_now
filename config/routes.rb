Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    namespace :private do
      resources :forecast, only: :index
    end
  end
end
