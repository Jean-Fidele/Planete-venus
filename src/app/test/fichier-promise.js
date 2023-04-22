
var add = function (x, y){
    return new Promise((resolve, reject)=>{
        var sum = x + y;
        if(sum){
            console.log("Somme de x + y :" + sum);
            resolve(sum);
        }
        else{
            reject(Error("On a une erreur de ADD"));
        }
    });
}

var sub = function (x, y){
    return new Promise((resolve, reject)=>{
        var sum = x - y;
        if(sum > 0){
            console.log("Difference de x - y :" + sum);
            resolve(sum);
        }
        else{
            reject(Error("On a une erreur de SUB"));
        }
    });
}

/*
add(25,5)
.then((x)=> {
    return sub(x, 5);
})
.then((x)=> {
    return add(x, 5);
})
.catch((x)=>{
    console.log("Je commis une erreur : " + x);
});*/

async function ajout (x,y)
{
    await add(x,y);
}
  
var op = ajout(25,5);  
op = ajout(op,5);  
op = ajout(op,20);  


