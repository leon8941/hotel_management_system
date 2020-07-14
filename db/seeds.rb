# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


if Rails.env.development?
  HotelPackage.destroy_all

  packages = [
    {
      hotel_name: "Concorde Hotel",
      price: 1599,
      duration_day: 3,
      duration_night: 2,
      validity_duration: 15,
      description: "This package is only valid for 15 days! Grab it right now!",
    },
    {
      hotel_name: "Fahrenheit Suites",
      price: 3999,
      duration_day: 5,
      duration_night: 4,
      validity_duration: 30,
      description: "This amazing hotel provide premium package and is only valid for 30 days! Grab it right now! Don't wait!",
    },
    {
      hotel_name: "Mines Wellness Hotel",
      price: 8999,
      duration_day: 7,
      duration_night: 6,
      validity_duration: 45,
      description: "What are you waiting for? Grab it now while the promotion last!",
    }
  ]

  packages.each do |package|
    HotelPackage.create(package)
  end
end