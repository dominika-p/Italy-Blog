document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    //kliknięcie poza menu, aby je schować
    document.addEventListener('click', function (event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('show');
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('contact-form').reset(); 
});
