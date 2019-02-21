const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("Les entrepreneurs nés dans les années 1970 sont : ")
let nb= 0
  entrepreneurs.forEach(entrepreneur => {
if (entrepreneur["year"]>= 1970 && entrepreneur["year"] <= 1980)
nb++
 });
console.log(nb);

let date = 2019
entrepreneurs.forEach(entrepreneur => {
console.log("Aujourd'hui, " +entrepreneur["first"] + " "+ entrepreneur["last"]+" aurait eu " + (2019-entrepreneur["year"])+ " ans")
});

console.log(entrepreneurs.sort(function(a,b){
return a.last.localeCompare(b.last);
}));

