const container = document.getElementById("quote-container");
const quoteTxt = document.getElementById("quote");
const authorTxt = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const redditButton = document.getElementById("reddit");
const facebookButton = document.getElementById("facebook");
const linkedinButton = document.getElementById("linkedin");
const newQuoteButton = document.getElementById("new-quote");

// global variable
let apiQuotes = [];

// display new quote
function newQuote() {
  // pick a random quote from apiQuotes array
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // check if author field is blank. If it's black, replace it with Unknown Author
  !quotes.author
    ? authorTxt.textContent == "Unknown Author"
    : (authorTxt.textContent = quotes.author);

  // applied .long-quote css class if the quote is to long
  quotes.text.length > 120
    ? quoteTxt.classList.add("long-quote")
    : (quoteTxt.textContent = quotes.text);
}

// fetch quotes from api
async function fetchQuotes() {
  const url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(url);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // error handler
  }
}

// tweet quote
function tweetQuote() {
  const url = `https://twitter.com/intent/tweet?text=${quoteTxt.textContent} - ${authorTxt.textContent}`;
  openNewTab(url);
}

function openNewTab(url) {
  window.open(url, "_blank");
}

// event listener
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);

// on load
fetchQuotes();
