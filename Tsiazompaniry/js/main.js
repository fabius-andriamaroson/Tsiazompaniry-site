$('.carousel').carousel({

    pause: "null"

});

AOS.init();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    // Récupère les valeurs des champs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Crée l'URL mailto
    var mailtoLink = 'mailto:exemple@mail.com?subject=Nouvelle question de ' + encodeURIComponent(name) + '&body=' + encodeURIComponent(message + '\n\nEnvoyé par: ' + email);
    
    // Ouvre le client de messagerie
    window.location.href = mailtoLink;
});