class HotelPackagesController < ApiController
  # GET /hotel_packages
  def index
    @hotel_packages = HotelPackage.all
    render json: @hotel_packages.to_json
  end

  # GET /hotel_packages/:id
  def show
    @hotel_package = HotelPackage.find(hotel_package_params[:id])
    render json: @hotel_package.to_json
  end

  def create
    @hotel_package = HotelPackage.create!(
      hotel_package_params
    )

    render json: @hotel_package.to_json
  end

  def update
    @hotel_package = HotelPackage.find(params[:id])

    @hotel_package.update(hotel_package_params)

    render json: @hotel_package.to_json
  end

  def destroy
    @hotel_package = HotelPackage.find(params[:id])

    @hotel_package.destroy

    render json: @hotel_package.to_json
  end

  private

  def hotel_package_params
    params.require(:hotel_package).permit(:id, :hotel_name, :price, :duration_day, :duration_night, :validity_duration, :description)
  end
end