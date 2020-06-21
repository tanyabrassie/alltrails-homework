class Api::V1::PlacesController < ActionController::API 
  include HTTParty
  @@api_key = '&key=AIzaSyDpEr8NpgU_ERTJw6tm1nmGrpUZozM-oQE'

  def nearby_places
    nearby_search_base = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    
    location_prefix = 'location='
    location = location_prefix + params[:location]
    
    name_prefix = '&name='
    name = params[:name] ? name_prefix + params[:name] : ''

    radius_prefix = '&radius='
    radius_default = radius_prefix + '1000'
    radius = params[:radius] ? radius_prefix + params[:radius] : radius_default
    
    type = '&type=restaurant'

    url = 
      nearby_search_base + 
      location +
      radius +
      name + 
      type +
      @@api_key

    response = self.class.get(url)
    render json: response
  end

  def photos
    photos_search_base = 'https://maps.googleapis.com/maps/api/place/photo?'
    
    photo_reference_prefix = '&photo_reference='
    photo_reference = photo_reference_prefix + params[:photo_reference]
    
    size = 'maxwidth=400'
    
    url = 
      photos_search_base + 
      size +
      photo_reference +
      @@api_key

    response = self.class.get(url)
    image = Base64.strict_encode64(response)
    render json: {base64Image: image}
  end
end

