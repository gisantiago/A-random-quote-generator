/******************************************
A Random Quote Generator
******************************************/

var intervalID, timeoutID;


/*** 
  Array of quote objects
***/
const quotes = [
  {
    quote: "The people who are crazy enough to think they can change the world are the ones who do.",
    source: "Steve Jobs",
    year: 1997,
    citation: "Apple's 1997 Think Different campaign",
    category: "Business"
  },
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source: "Dr. Suess",
    year: 2013,
    citation: "WikiQuote"
  },
  {
    quote: "It Doesn’t Matter Where You Came From. All That Matters Is Where You Are Going.",
    source: "Brian Tracy",
    year: 2018,
    category: "Inspirational"
  },
  {
    quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    source: "Ayn Rand",
    year: "1982"
  },
  {
    quote: "The task of the modern educator is not to cut down jungles but to irrigate deserts.",
    source: "CS Lewis",
    year: "1943",
    citation: "The Abolition of Man"
  },
  {
    quote: "Love is not affectionate feeling, but a steady wish for the loved person's ultimate good as far as it can be obtained.",
    source: "CS Lewis",
    year: "1970",
    citation: "God In The Dock"
  },
];




/***
  The `getRandomQuote` function:
   - generate a random number 
***/
function getRandomQuote(arr) {
  quote = quotes[Math.floor( Math.random() * quotes.length)];
  quote[arr];
  return quote;
}

/***
  The `random_bg_color` function:
   - generate a random background color
***/
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}

/**
  The `quoteAutoRefresh` triggers the printQuote function automatically every 3 seconds.
  The `timeoutInactivity` activate the `quoteAutoRefresh` after 30 seconds of page refresh. 
**/

function quoteAutoRefresh () {
  intervalID = window.setInterval(printQuote, 3000);
}

function timeoutInactivity () {
  timeoutID = window.setTimeout(quoteAutoRefresh, 30000);
}
timeoutInactivity();


/***
  The `printQuote` function: 
   - call the `getRandomQuote` function.
   - using the properties of the quote objects assign HTML string to `quoteHTML`
   - a pair of conditionals statements alow for the optional properties (citation and year) to be printed if they exist 
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var randomQuote = getRandomQuote();
  random_bg_color();
  var quoteHTML = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}`;
        if (randomQuote.citation){
          quoteHTML += `<span class="citation"> ${randomQuote.citation} </span>`;
        }
        if (randomQuote.year) {  
          quoteHTML += `<span class="year"> ${randomQuote.year} </span>`;
        }
        if (randomQuote.category) {  
          quoteHTML += `<br><span class="category"> ${randomQuote.category} </span>`;
        }
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML;
  return quoteHTML;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);







