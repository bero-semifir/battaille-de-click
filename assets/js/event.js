const parent = document.getElementById("parent");
const enfant = document.getElementById("enfant");

const compteurParent = document.getElementById("compteurParent");
const compteurEnfant = document.getElementById("compteurEnfant");

let cptParent = 0;
let cptEnfant = 0;

// Incrémentaton des clicks sur le parent
parent.addEventListener("click",()=>{
    cptParent ++;
    // cptParent = cptParent + 1;
    compteurParent.innerText = cptParent ;
});

// Incrémentation des clicks sur l'enfant
enfant.addEventListener("click",(event)=>{
    // arreter un comportement par défaut d'un élement du navigateur
    event.preventDefault();
    // empêcher la propagation de l'événement dans la branche de l'arbre DOM
    event.stopPropagation();
    cptEnfant ++;
    compteurEnfant.innerText = cptEnfant ;
});