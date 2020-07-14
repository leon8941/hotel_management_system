class CreateHotelPackagesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :hotel_packages do |t|
      t.string :hotel_name
      t.decimal :price
      t.integer :duration_day
      t.integer :duration_night
      t.integer :validity_duration
      t.string :description
      t.timestamps null: false
    end
  end
end
