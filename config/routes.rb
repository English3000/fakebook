Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :posts, only: [:index]
    end
    resource :session
    resources :posts do
      resources :comments, except: [:create, :update]
    end
    resources :comments, only: [:create, :update]
  end
end
