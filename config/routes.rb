Rails.application.routes.draw do
  get 'restaurants/index'
  root 'restaurants#index'

  get '/api/v1/places/nearby_places' => 'api/v1/places#nearby_places'
  get '/api/v1/places/photos' => 'api/v1/places#photos'
end
