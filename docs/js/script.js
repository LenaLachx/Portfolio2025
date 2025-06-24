// Code JavaScript pour mon portfolio
document.addEventListener('DOMContentLoaded', function() {
  // Initialisation du menu mobile
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
  
  // Bouton menu qui ouvre la navigation
  var menuBtn = document.getElementById('menu-toggle');
  if (menuBtn) {
    menuBtn.onclick = function(e) {
      e.preventDefault();
      var menu = M.Sidenav.getInstance(document.getElementById('mobile-nav'));
      menu.open();
    };
  }
  
  // Animation simple des sections au défilement
  window.onscroll = function() {
    // Anime les textes quand on défile
    var textes = document.querySelectorAll('.fade-text');
    for (var i = 0; i < textes.length; i++) {
      var hauteurFenetre = window.innerHeight;
      var distance = textes[i].getBoundingClientRect().top;
      
      // Si l'élément est visible dans la fenêtre
      if (distance < hauteurFenetre - 100) {
        textes[i].classList.add('visible');
      } else {
        textes[i].classList.remove('visible');
      }
    }
    
    // Met à jour les points de navigation
    var sections = document.querySelectorAll('section');
    var points = document.querySelectorAll('.section-nav a');
    
    for (var j = 0; j < sections.length; j++) {
      var position = sections[j].getBoundingClientRect().top;
      
      if (position < hauteurFenetre/2 && position > -sections[j].offsetHeight/2) {
        // Retire la classe active de tous les points
        for (var k = 0; k < points.length; k++) {
          points[k].classList.remove('active');
        }
        // Ajoute la classe active au point correspondant
        if (points[j]) {
          points[j].classList.add('active');
        }
      }
    }
  };
  
  // Navigation fluide pour les liens internes
  var liens = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < liens.length; i++) {
    liens[i].onclick = function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        var cible = document.querySelector(this.getAttribute('href'));
        if (cible) {
          window.scrollTo({
            top: cible.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };
  }
  
  // Formulaire de contact
  var formulaire = document.getElementById('contact-form');
  if (formulaire) {
    formulaire.onsubmit = function(e) {
      e.preventDefault();
      alert("Merci pour votre message ! Je vous répondrai bientôt.");
      this.reset();
    };
  }
  
  // Carrousel Genially - Nouveau code
  var prevBtn = document.getElementById("prev-btn");
  var nextBtn = document.getElementById("next-btn");
  
  if (prevBtn && nextBtn) {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("carousel-slide");
    
    // Fonction pour afficher une slide spécifique
    function showSlide(index) {
      // Cacher toutes les slides
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      
      // Afficher la slide demandée
      slides[index].classList.add("active");
    }
    
    // Bouton suivant
    nextBtn.addEventListener("click", function() {
      // Passer à la slide suivante
      slideIndex++;
      
      // Revenir à la première slide si on dépasse la dernière
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      
      // Afficher la nouvelle slide
      showSlide(slideIndex);
    });
    
    // Bouton précédent
    prevBtn.addEventListener("click", function() {
      // Passer à la slide précédente
      slideIndex--;
      
      // Aller à la dernière slide si on est à la première
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      
      // Afficher la nouvelle slide
      showSlide(slideIndex);
    });
  }
});