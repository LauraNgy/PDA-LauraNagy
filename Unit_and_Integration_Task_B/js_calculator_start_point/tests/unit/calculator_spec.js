var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });
  it('can perform addition', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  });
  it('can perform substraction', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  });
  it('can perform multiplication', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 15);
  });
  it('can perform division', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  });
  it('can concatenate multiple number clicks', function(){
    calculator.numberClick(4);
    calculator.numberClick(2);
    const actual = calculator.runningTotal;
    assert.equal(actual, 42);
  });
  it('it can chain multiple operations together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 42);
  })

  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(9);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })



});
