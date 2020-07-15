class HotelPackage < ApplicationRecord
  validates :price, numericality: true
  validates :duration_day, numericality: true
  validates :duration_night, numericality: true
  validates :validity_duration, numericality: true

  default_scope { order(hotel_name: :asc) }

  def addtional_data
    as_json.merge({
      valid_until: (self.created_at + self.validity_duration.days).to_i
    })
  end
end