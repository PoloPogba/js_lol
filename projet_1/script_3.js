



function pyramide(number) {
let espace = " ";
let pierre = "#";
for(let count = 1; count <= number; count++){
   console.log(espace.repeat(number-count)+pierre.repeat(count))
  }
}

let number = prompt("Salut, bienvenue dans la super pyramide de Polo, combien d'étages veux-tu :")
pyramide(number);
  
