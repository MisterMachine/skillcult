# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

houses = House.create([
  { title: 'User Experience', text: 'Welcome to the house of User Experience. Here you will experience users like never before.' },
  { title: 'Visual Design', text: 'You are now entering the house of visual design. Be prepared to have your eyes bleed.' },
  { title: 'Front-end', text: 'Some people like to hide in the back-end, but you, my grasshopper, are not one to cower in the corner. While other developers are still wrapping divs you know your navs from your footers.' },
  { title: 'Coder', text: 'Deep in the House of Code we leave all fear behind. Hack Hack... ahhhhhhhhhhh!' },
])