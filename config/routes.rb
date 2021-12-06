Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :carts, only: [:create, :show]
    resources :cart_items, only: [:create, :show, :destroy]
    resources :pets, except: [:new]
    resources :petpoints, only: [:create, :show, :index]
    resources :reviews, only: [:create, :index, :show]
    resources :categories, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    
  end

  root "static_pages#root"
end
