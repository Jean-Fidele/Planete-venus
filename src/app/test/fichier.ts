
const obj = {
    nom: "RAKOTOMAMONJY",
    prenom: "Fidele",
    enfant:{
        nom: "RAKOTOMAMONJY",
        prenom: "Denis",
        enfant:[1,2,3,4,5]
    }
}

const add = {...obj,
             enfant:{
                ...obj.enfant, 
                nom:"RRK", 
                prenom: "Denis copy"
             }
            };

console.log("Ancien Tab : " + JSON.stringify(obj));
console.log("Nouvelle Tab : " + JSON.stringify(add));