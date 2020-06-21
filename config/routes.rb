Rails.application.routes.draw do
  get 'restaurants/index'
  root 'restaurants#index'

  get '/api/v1/search/' => 'api/v1/search#index'
end
