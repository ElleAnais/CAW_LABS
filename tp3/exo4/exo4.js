// exo4.js

const fs = require('fs');

// Vérifier si le texte à ajouter est passé en tant qu'argument
if (process.argv.length < 3) {
  console.error('Usage: node exo4.js "text to be added"');
  process.exit(1); // Arrêter le script avec un code d'erreur
}

// Récupérer le texte à ajouter à partir des arguments de la ligne de commande
const textToAdd = process.argv[2];

// Créer un fichier avec le texte
fs.writeFile('f.txt', textToAdd, (err) => {
  if (err) {
    console.error(`Error creating file: ${err.message}`);
    process.exit(1); // Arrêter le script avec un code d'erreur
  }

  console.log('The file has been saved!');
});
