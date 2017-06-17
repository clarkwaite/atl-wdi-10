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

