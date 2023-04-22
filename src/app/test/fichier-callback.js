
function createQuote(quote, Callback){
    var myQuote = "Je suis un quote : " + quote;
    Callback(myQuote);
}

function logQuote(quote){
    for(var i = 1; i<5000; i++){
        console.log(quote + ": " + i);
    }
}

createQuote("Fidele", (x)=>{ console.log(x)})

console.log("Je suis la second fonction a executer!");