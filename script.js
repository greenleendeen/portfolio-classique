// la fonction qui a pour role de rendre la nav bar responsive avec le menu hamburger
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// la fonction qui fait apparaitre progressivement le texte quand la page est chargée

window.addEventListener('load', function() {
  document.body.classList.add('loaded');  // Ajoute la classe "loaded" au body après le chargement
});




/* anim images */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);