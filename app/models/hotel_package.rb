class HotelPackage < ApplicationRecord
  default_scope { order(hotel_name: :asc) }
  
end