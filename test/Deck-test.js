const chai = require('chai')
const expect = chai.expect

const { createDeck } = require('../src/deck')

describe("deck", () => {
  let card1, card2, card3, deck;
  beforeEach(() => {
    card1 = createCard(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = craeteCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3])
  });

  it("should be a function", () => {
    expect(createDeck).to.be.a("function")
  })

  it("should create a deck of cards", () => {
    const deck = createDeck([card1, card2, card3])
    expect(deck).to.deep.equal([card1, card2, card3])
  });

  
  //it block 
    // test the createDeck method is it a function
    // create 3 or 4 cards from createDeck function as placeholders
    // ref the example
    // test the output is an array
    console.log(createDeck)

  //execution
  //create vars for the function
  //assertion
  //write it blocks for checking what the function has done

  //countCards it block
})

//write seaparate tests for 3 placeholder object cards to pass thru like vampire, create an array and will work on an arg array

