/* This program generates random motivational quotes  */

var myQuotes = [
    "Don't stop when you are tired. Stop when you are done.",
    "Tough times don't last. Tough people do.",
    "Work hard in silence, let your success be your noise",
    "If you can dream it, you can do it.","Don't be the same. Be better.","Good things take time",
    "There is no excuse for not trying."
]

//this will generate random text from an array

function newQuote(){
    let randomText = myQuotes[Math.floor(Math.random()*myQuotes.length)];
    document.getElementById('display').innerHTML = randomText;
    console.log(randomText);
    
}

newQuote();
