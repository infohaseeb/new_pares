// Initialize carousel with 5s interval
const heroCarousel = document.querySelector('#heroCarousel');
const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: 'carousel'
});



document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('previewModal');
    const modalImg = document.getElementById('previewImage');

    modal.addEventListener('show.bs.modal', function (event) {
        const trigger = event.relatedTarget;
        const imgSrc = trigger.getAttribute('data-img');
        modalImg.src = imgSrc;
    });
}); 


