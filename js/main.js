var arrayQuore = [
  {quote : '“Be yourself; everyone else is already taken.”',
    authot : 'Oscar Wilde'},


  {quote : '“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”',
  authot : 'Marilyn Monroe'},

  {quote : '“Be yourself; everyone else is already taken.”',
    authot : 'Oscar Wilde'},


  {quote : '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
    authot : 'Albert Einstein'},


  {quote : '“So many books, so little time.”',
    authot : 'Frank Zappa'},


  {quote : '“A room without books is like a body without a soul.”',
    authot : 'Marcus Tullius Cicero'},

]


function gitQuote(){

var rend = Math.floor(Math.random()*(arrayQuore.length));

document.getElementById("quote_outbut").innerHTML= arrayQuore[rend].quote;
document.getElementById("author_outbut").innerHTML= `-- ${arrayQuore[rend].authot}`;



}


