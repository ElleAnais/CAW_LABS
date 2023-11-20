// fileImport.js

// Importer la fonction mean depuis notation.js
const meanFunction = require('./notation');

// Exemple d'utilisation
const scores1 = [85, 90, 92, 88, 78];
const scores2 = [75, 80, 85, 90, 95];

console.log('Moyenne des scores 1 :', meanFunction(scores1));
console.log('Moyenne des scores 2 :', meanFunction(scores2));
