const targets = document.querySelectorAll('.fade-in');

function fadeIn() {
    targets.forEach(target => {
        const rect = target.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (rect < windowHeight - 100) {
            target.classList.add('show');
        }
    });
}

window.addEventListener('scroll', fadeIn);
fadeIn();