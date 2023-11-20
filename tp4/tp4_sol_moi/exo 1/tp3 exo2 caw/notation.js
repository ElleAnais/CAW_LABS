// notation.js

// Définir la fonction mean
const mean = function (scores) {
    // Vérifier si le tableau des scores est vide
    if (scores.length === 0) {
      return 0; // Si le tableau est vide, la moyenne est 0.
    }
  
    // Calculer la somme des scores en utilisant la méthode reduce
    const total = scores.reduce((acc, score) => acc + score, 0);
  
    // Calculer la moyenne en divisant la somme par le nombre total de scores
    const average = total / scores.length;
  
    // Retourner la moyenne
    return average;
  };
  
  // Exporter la fonction mean pour qu'elle puisse être utilisée dans d'autres fichiers
  module.exports = mean;
  