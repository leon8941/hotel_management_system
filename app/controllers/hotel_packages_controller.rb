class HotelPackagesController < ApiController
  # GET /hotel_packages
  def index
    @hotel_packages = HotelPackage.all
    render json: @hotel_packages.to_json
  end

  # GET /hotel_packages/:id
  def show
    @hotel_package = HotelPackage.find(params[:id])
    render json: @hotel_package.to_json
  end
end