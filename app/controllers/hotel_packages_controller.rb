class HotelPackagesController < ApiController
  def index
    @hotel_packages = HotelPackage.select(:id, :hotel_name, :price, :duration_day, :duration_night, :validity_duration, :description, :created_at).all.map(&:addtional_data)

    render json: @hotel_packages.to_json
  end

  def show
    @hotel_package = HotelPackage.find(params[:id]).addtional_data()
    
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
    params.require(:hotel_package).permit(:id, :hotel_name, :price, :duration_day, :duration_night, :validity_duration, :description, :created_at)
  end
end