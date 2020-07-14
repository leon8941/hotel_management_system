class HotelPackage < ApplicationRecord
  validates :price, numericality: true
  validates :duration_day, numericality: true
  validates :duration_night, numericality: true
  validates :validity_duration, numericality: true

  default_scope { order(hotel_name: :asc) }
end