class Api::V1::SearchController < ActionController::API 
  include HTTParty

  @@nearby_search_base = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
  @@api_key = '&key=AIzaSyDpEr8NpgU_ERTJw6tm1nmGrpUZozM-oQE'

  @@location_param = 'location='
  @@radius = '&radius=1000'
  @@type = '&type=restaurant'
  
  def index
    location = @@location_param + params[:location]

    url = @@nearby_search_base + 
      location +
      @@radius +
      '&name=pizza' + 
      @@type +
      @@api_key
    
    response = self.class.get(url)

    puts response
    render json: response.body
  end
end

