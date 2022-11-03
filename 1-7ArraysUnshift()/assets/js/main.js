console.log("test");

const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
console.log(deutscheGerichte);

deutscheGerichte.unshift("Bremer Knipp", "Pinkel mit Grünkohl", "Linseneintopf");
console.log(deutscheGerichte);

let nichtGut = [deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift()];
console.log(nichtGut);
