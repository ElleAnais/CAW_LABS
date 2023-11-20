// ReadFile.js

const fs = require('fs');

// Nom du fichier à lire
const fileName = process.argv[2] ;//tjbdli param deuxieme li nhto f a commande 

// Lire le contenu du fichier de manière asynchrone
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1); // Arrêter le script avec un code d'erreur
  }

  // Afficher le contenu du fichier
  console.log('File Contents:');
  console.log(data);
});


