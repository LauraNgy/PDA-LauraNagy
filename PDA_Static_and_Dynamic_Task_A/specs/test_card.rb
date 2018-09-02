require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("hearts", 1)
    @card2 = Card.new("clubs", 4)
    @card3 = Card.new("spades", 5)
    @cards = [@card1, @card2, @card3]
    @game = CardGame.new()
  end

  def test_check_for_ace__true()
    expected = true
    actual = @game.checkforAce(@card1)
    assert_equal(expected, actual)
  end

  def test_check_for_ace__false()
    expected = false
    actual = @game.checkforAce(@card3)
    assert_equal(expected, actual)
  end

  def test_highest_card__first_card_highest()
    expected = "spades"
    actual = @game.highest_card(@card3, @card2)
    assert_equal(expected, actual)
  end

  def test_highest_card__last_card_highest()
    expected = "spades"
    actual = @game.highest_card(@card2, @card3)
    assert_equal(expected, actual)
  end

  def test_cards_total()
    expected = "You have a total of 10"
    actual = CardGame.cards_total(@cards)
    assert_equal(expected, actual)
  end

end
