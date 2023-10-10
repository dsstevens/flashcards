function createCard(num, question, answers, correctAnswer){
  let card = {
    id: num,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card
}

function evaluateGuess(){

}

module.exports = {
  createCard,
  evaluateGuess
}