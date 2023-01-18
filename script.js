let apiQuotes = [];

// display new quote
function newQuote() {
  // pick a random quote from apiQuotes array
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  return quotes;
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

// on load
fetchQuotes();
