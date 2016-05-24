# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

1000.times do |i|
  puts "Seeding Person #{i}"
  Person.create({
    name: Faker::Name.name,
    birthdate: Faker::Date.between(50.years.ago, 15.years.ago),
    email: Faker::Internet.email,
    address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
    image: Faker::Avatar.image,
    status: Person.statuses[ ['new_found', 'aproved', 'reproved'].sample ]
  })
end