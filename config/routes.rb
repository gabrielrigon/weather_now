Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    namespace :private do
      resources :forecasts, only: :index

      resources :users, only: :create do
        collection do
          post :authenticate
        end
      end
    end

    resources :forecasts, only: :index
  end

  get '*path', to: 'app#index', constraints: -> (req) { !req.xhr? && req.format.html? }
  root 'app#index'
end
