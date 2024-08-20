// const answers = document.querySelectorAll(".card");
// const question = document.getElementById("question");
// const answer = document.getElementById("answer");
// const add_card = document.querySelector(".main_add");




// add_card.addEventListener("click", () => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   const ques = document.createElement("p");
//   ques.innerText = question.value;
//   const ans = document.createElement("span");
//   ans.innerText = answer.value;
//   ans.classList.add("card_ans")
//   card.appendChild(ques);
//   card.appendChild(ans);
//   card.addEventListener("click", ()=>{
//     ans.style.visibility="visible";

//   })
//   const content = document.querySelector(".content");
//   content.appendChild(card);
// });
const add_card = document.querySelector(".main_add");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const content = document.querySelector(".content");
const main_close = document.querySelector(".main_close")

// Function to create a flashcard
function createCard(questionText, answerText) {
  const card = document.createElement("div");
  card.classList.add("card");

  const ques = document.createElement("p");
  ques.innerText = questionText;

  const ans = document.createElement("span");
  ans.innerText = answerText;
  ans.classList.add("card_ans");
    // Initially hide the answer

  card.appendChild(ques);
  card.appendChild(ans);

  card.addEventListener("click", () => {
    ans.classList.toggle("card_ans")  // Show the answer on click
  });

  content.appendChild(card);
}

// Function to save cards to localStorage
function saveCardsToLocalStorage(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
}

// Function to get cards from localStorage
function getCardsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('cards')) || [];
}

// Add event listener for creating and saving flashcards
add_card.addEventListener("click", () => {
  const questionText = question.value;
  const answerText = answer.value;

  if (questionText && answerText) {
    // Create a flashcard
    createCard(questionText, answerText);

    // Save the card data in localStorage
    const cards = getCardsFromLocalStorage();
    cards.push({ question: questionText, answer: answerText });
    saveCardsToLocalStorage(cards);

    // Clear input fields after adding a card
    question.value = '';
    answer.value = '';
  }
});

// Load cards from localStorage when the page loads
window.onload = function () {
  const savedCards = getCardsFromLocalStorage();
  savedCards.forEach(cardData => {
    createCard(cardData.question, cardData.answer);
  });
};

main_close.addEventListener("click",()=>{
  localStorage.clear()
})







