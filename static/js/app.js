let msg = 'Welcome to Random generator';
console.log(msg);

//  declarations
const btn = document.querySelector('.container button');
const joke = document.querySelector('.container .joke p');
const btnQuote = document.getElementById('btn_quote');
const resultQuote = document.getElementById('quote_txt');

// logics
document.addEventListener('DOMContentLoaded', function () {
  fetchJokes();
  fetchQuotes();
});

btn.addEventListener('click', fetchJokes);
async function fetchJokes() {
  const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const jokeObj = await jokeData.json();

  joke.innerHTML = jokeObj.joke;
}

btnQuote.addEventListener('click', fetchQuotes);
async function fetchQuotes() {
  const quoteData = await fetch('https://api.quotable.io/random', {
    headers: {
      Accept: 'application/json',
    },
  });
  const quoteObj = await quoteData.json();

  resultQuote.innerHTML = quoteObj.content;
}
