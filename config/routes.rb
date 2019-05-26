Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    namespace :private do
      resources :forecast, only: :index
    end

    resources :forecast, only: :index
  end

  get '*path', to: 'app#index', constraints: -> (req) { !req.xhr? && req.format.html? }
  root 'app#index'
end
