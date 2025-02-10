// content.js
(function () {
  // Sélectionner le textarea via son ID
  const noteTextarea = document.querySelector("#add_order_note");

  // Vérifier que le textarea existe dans la page
  if (noteTextarea) {
    // Mettre la valeur par défaut
    noteTextarea.value = "Lien de suivi : ";
  }
})();
