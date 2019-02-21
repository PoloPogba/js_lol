function factoriel(number) {
    let fact = 1
    for(let count = 0; count<= number-1; count++) {
    
        fact = fact * (number-count);
        }
        return fact
     }
   
   let number = prompt("De quel nombre veux tu calculer le factoriel :");
   console.log("Le factoriel de "+ number + " est : " + factoriel(number));