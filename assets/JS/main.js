document.addEventListener('DOMContentLoaded', () => {
    const imgBoxes = document.querySelectorAll('.img-box');

    imgBoxes.forEach((imgBox) => {
        imgBox.addEventListener('click', () => {
            removeActiveClasses();
            imgBox.classList.add('active');
        });
    });

    function removeActiveClasses() {
        imgBoxes.forEach((imgBox) => {
            imgBox.classList.remove('active');
        });
    }
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-1', {
    rotate: { x: 20 },
    delay: 200,
    duration: 2000
});
