Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :posts, only: [:index]
      # resources :friendships, only: [:post] # :id == non-currentUser
    end
    resource :session
    resources :posts do
      resources :likes, only: [:create, :destroy]
    end
    resources :comments do
      resources :likes, only: [:create, :destroy]
    end
    resource :friendships
  end
end
