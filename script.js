// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery lightbox effect
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const src = this.getAttribute('src');
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', function() {
            lightbox.remove();
        });
    });
});

// Contact form submission (basic validation)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '!');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});