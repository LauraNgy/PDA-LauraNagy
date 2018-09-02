### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  def checkforAce(card)
    if card.value = 1
      # will not return the expected result because '=' is not a check but the symbol for assigning a variable a value
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
# typo: "dif" instead of "def"
# no comma between the parameters of the method
  if card1.value > card2.value
    return card.name
    # doesn't specify an actual object, it should be 'card1.name'
    # there's no name attribute to objects in 'Card' class
  else
    card2
    # does not specify an attribute of the object so it's going to return the entire object
    # it either has the 'return' keyword or it doesn't. no consistency
  end
end
end
# too many "end"-s, the last one will be read as the end of the class ant the following method will throw an error

def self.cards_total(cards)
  total
  # does not set 'total' to equal any value
  for card in cards
    total += card.value
    return "You have a total of" + total
    # this will add the first card value to the total and return it, end the loop and get out of the method. the 'return' should be placed after the loop
    # 'total' is a variable, so it needs  string interpolation in order to be handled correspondingly.
  end
end

# there is no keyword 'end' for class "CardGame"


```
