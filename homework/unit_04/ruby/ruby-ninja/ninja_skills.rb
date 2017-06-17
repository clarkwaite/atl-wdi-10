# Challenge 1: Booleans

# Create a variable a and set it equal to true
# Create a variable b and set it equal to false
# Write a statement using a and b that evaluates to false
# puts the result to the terminal
# Write a statement using a and b that evaluates to true
# puts the result to the terminal
# 🎯 Commit -m "1. Boolean Skills"

def even_or_odd(num)

a = true
b = false

if num.even? == a
    puts a
elsif num.even? == b 
    puts b
end

even_or_odd(50)

# Challenge 2: Nil

# Create a variable of your choosing and set it equal to Nil
# p the value of the variable to the terminal
# puts the value of the variable to the terminal concatenate the string "nil was here".
# print the value of the variable to the terminal
# puts the class of the value of the variable to the terminal. Use the .class method. Look up this method on Google.
# 🎯 Commit -m "2. Nil skills."

notta = nil
puts notta
x = "#{notta} was here."
puts x
puts nil.class
# am I missing something? This didn't work very well.

# Challenge 3: Integers

# Create a variable d and set it equal to a Fixnum
# puts the value of d to the terminal
# Create a variable e and set it equal to a Float
# puts the value of e to the terminal
# Set d equal to e on another line
# puts the value of d to the terminal
# 🎯 Commit -m "3. Integers Skills"

d = 15
puts d
e = 5.5
puts e
d = e 
puts d

# Challenge 4: Strings

# Create a variable christine and set it equal to the string "Hi, I'm Christine"
# Create a variable likesTo and set it equal to the String "long walks on the beach, kinda."
# Using string interpolation and the variables tims and likesTo puts the following string to the terminal: "Hi, I'm Christine and I like long walks on the beach, kinda."
# Create a variable g and set it equal to the string "2"
# Create a variable gToNumber and set it equal to the Integer 2
# puts the value of g + gToNumber in the terminal. What happens? How can you fix this?
# 🎯 Commit -m "4. String skills "

christine = "Hi, I'm Christine"
likes_to = "long walks on the beach, kinda."
tims = "#{christine} and I like #{likes_to}"
puts tims
g = "2"
g_to_number = 2
puts g + g_to_number
puts g.to_i + g_to_number

# Challenge 5: Input and Output

# Create a small program that asks the user to input an Integer and multiplies the number by two.

# Create a small program that does the following

# Asks the user for their name
# Asks the user what they like to do
# Prints out the user's name and what they like to do in a sentence.
# 🎯 Commit -m "5. Input/Output skills"

puts "Enter a number!"
num = gets.chomp.to_i
def double(num)
    puts num * 2
end
double(num)

def small_talk()
puts "What is your name?"
    name = gets.chomp
puts "What do you like to do?"
    likes_to = gets.chomp
puts "It's great to meet you #{name}, I hope you get to #{likes_to} soon!"
end
small_talk()

# Challenge 6: Arrays

# Create a variable myFirstArray and set it equal to an empty array
# Set the variable myFirstArray to an array with five Strings and four Integers
# Using myFirstArray puts the last value of the array to the terminal
# Using myFirstArray puts the first value of the array to the terminal
# Set the second value of myFirstArray to the String "Joe"
# Set the third value of myFirstArray to the Integer 3
# Push the String Boolean true into myFirstArray
# Puts the class of the fourth value in myFirstArray
# 🎯 Commit -m "6. Arrays skills"

my_first_array = []
my_first_array = ['one', 'two', 'three', 'four', 'five', 6, 7, 8, 9]
puts my_first_array.last
puts my_first_array.first
my_first_array[1] = 'Joe'
my_first_array[3] = 3
my_first_array << true
puts my_first_array[3].class

# Challenge 7: Hashes

# Create a variable called myFavoriteAnimals and set it equal to a Hash with five animals. The animal name as the keys and the species as the values. You must include one animal with a name of "Edgar" and the value "Donkey"
# Change value of Edgar to be "Bear"
# Create a variable favoriteMovie and set it equal to a new, empty Hash.
# Edit the favoriteMovie hash and add a movie key with a value of your choosing.
# 🎯 Commit -m "7. Hashes skills"

my_favorite_animals = {
edgar: 'donkey',
ziggy: 'dog',
dumbo: 'elephant',
horse: 'horse',
stripes: 'zebra'
}
puts my_favorite_animals[:edgar] = 'Bear'
favorite_movie = {}
favorite_movie[:first_movie] = "A Knight's Tale"

# Challenge 8: Ranges

# Create a variable firstRange and set it equal to a Range from one to ten including ten.
# Convert firstRange to an array.
# Create a variable secondRange and set it equal to a Range from one to one thousand excluding the Number one thousand.
# Convert secondRange to an array
# Create a For loop that changes every value in firstRange to a String and using a p statement print those values out to the terminal
# Create a variable x and set it equal to zero
# Create a While loop that prints every value in secondRange while x < 50.
# Using .each multiply every other value in firstRange by two and push those values into a new Array. Print that array to the terminal.
# Using .map and if/else statements, iterate through firstRange and change every even value to a string. If the value is odd, don't change the value to a string.
# 🎯 Commit -m "8. I'm a Ninja Warrior. Bow down to me."

first_range = 1..10
first_range_array = first_range.to_a
second_range = 1...1000
second_range.to_a

for i in first_range do
  puts i.to_s
end

x = 0
for x in second_range do
  break if x > 50
  puts x
end

double_every_other = []
first_range_array.each_with_index do |number, index|
if index.even?
  double_every_other << (number * 2)
end
end
puts double_every_other

# Challenge 9: Sum of Natural Numbers

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000 using Ruby.

sum_of_natural_numbers = 0
for i in 1..1000 do
  if i % 3 == 0 or i % 5 == 0 
      sum_of_natural_numbers += i 
end
end
puts sum_of_natural_numbers

# The Final Challenge: Prime Numbers

# Write a method called check_prime? that will test whether a number is Prime. The method will return true if Prime, false if not.

# Write another method called get_primes that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with get_primes(100), it will print all the Prime numbers up to and including 100.

# This method can call on the previous check_prime? method.

# A Prime number is a number that is not evenly divisible by another number except 1 and itself.
# To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.
require "prime"

def check_prime?(num)
    Prime.prime?(num)
end
check_prime?(17)

def get_primes(num)
Prime.each(num) do |prime|
  puts prime
end
end
get_primes(100)