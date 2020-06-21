class Api::V1::SearchController < ActionController::API 
  include HTTParty 
    # 'AIzaSyDpEr8NpgU_ERTJw6tm1nmGrpUZozM-oQE'
  @@basic_url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?'

  def index
    puts params[:location]
    response = self.class.get(@@basic_url + 'input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDpEr8NpgU_ERTJw6tm1nmGrpUZozM-oQE')
    puts response
    render json: response.body
  end
end
