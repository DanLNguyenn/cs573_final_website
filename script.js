window.addEventListener('DOMContentLoaded', () => {
    const hiThere = document.getElementById('hi-there');
    const welcome = document.getElementById('welcome');

    // Slide in Hi There
    setTimeout(() => {
        hiThere.classList.add('show');
    }, 500);

    // Slide in Welcome
    setTimeout(() => {
        welcome.classList.add('show');
    }, 2000);
});

// Fade in elements on scroll
const faders = document.querySelectorAll('.fade-in, .fade-in-top');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Slide in animations for journey-section
const journeyItems = document.querySelectorAll('.journey-section h2, .journey-section h3, .journey-section .video-placeholder');

const journeyObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

journeyItems.forEach(item => {
    journeyObserver.observe(item);
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollingVideo = document.querySelector('.scrolling-video');
    if (scrollingVideo) {
        scrollingVideo.playbackRate = 2.0;
    }
});

