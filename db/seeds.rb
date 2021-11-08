# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Category.delete_all
Pet.delete_all

# Demo User

julian = User.create!(
  username: 'Julian',
  email: 'demo@aol.com',
  password: 'password'
)

# Pets

billy = Pet.create!(
  name: "Billy",
  color: "Black",
  type: "Goat",
  size: "Medium",
  owner_id: julian.id

)


# Categories

goats = Category.create!(title: 'Goats')
sheep = Category.create!(title: 'Sheep')
cows = Category.create!(title: 'Cows')
cats = Category.create!(title: 'Cats')
lizards = Category.create!(title: 'Lizards')
turtles = Category.create!(title: 'Turtles')
# snakes = Category.create!(title: 'Snakes')
# dogs = Category.create!(title: 'Dogs')
# fish = Category.create!(title: 'Fish')
# birds = Category.create!(title: 'Birds')
# rabbits = Category.create!(title: 'Rabbits')
# rats = Category.create!(title: 'Rats')

# Categories - Aws

goats_photo = open('https://petsy-categories.s3.amazonaws.com/goat.jpeg')
goats.photo.attach(io: goats_photo, filename:'goat.jpeg')

sheep_photo = open('https://petsy-categories.s3.amazonaws.com/Bitsy-sheep.jpeg')
sheep.photo.attach(io: sheep_photo, filename: 'Bitsy-sheep.jpeg')

cows_photo = open('https://petsy-categories.s3.amazonaws.com/cow.jpeg')
cows.photo.attach(io: cows_photo, filename: 'cow.jpeg')

cats_photo = open('https://petsy-categories.s3.amazonaws.com/kim.jpg')
cats.photo.attach(io: cats_photo, filename: 'kim.jpg')

lizards_photo = open('https://petsy-categories.s3.amazonaws.com/lizards.jpeg')
lizards.photo.attach(io: lizards_photo, filename: 'lizards.jpeg')

turtles_photo = open('https://petsy-categories.s3.amazonaws.com/turtle.jpeg')
turtles.photo.attach(io: turtles_photo, filename: 'turtle.jpeg')

# snakes_photo = open('https://petsy-categories.s3.amazonaws.com/goat-asset-min.jpeg')
# snakes.photo.attach(io: snakes_photo, filename: 'goat-asset-min.jpeg')

# dogs_photo = open('https://petsy-categories.s3.amazonaws.com/goat-asset-min.jpeg')
# dogs.photo.attach(io: dogs_photo, filename: 'goat-asset-min.jpeg')

# fish_photo = open('https://petsy-categories.s3.amazonaws.com/goat-asset-min.jpeg')
# fish.photo.attach(io: fish_photo, filename: 'goat-asset-min.jpeg')

# birds_photo = open('https://petsy-categories.s3.amazonaws.com/goat-asset-min.jpeg')
# birds.photo.attach(io: birds_photo, filename: 'goat-asset-min.jpeg')

# rabbits_photo = open('https://petsy-categories.s3.amazonaws.com/goat-asset-min.jpeg')
# rabbits.photo.attach(io: rabbits_photo, filename: 'goat-asset-min.jpeg')

# rats_photo = open('https://petsy-categories.s3.amazonaws.com/goat-asset-min.jpeg')
# rats.photo.attach(io: rats_photo, filename: 'goat-asset-min.jpeg')