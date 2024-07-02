$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.carousel-image');
    const imageCount = images.length;

    function showNextImage() {
        images.eq(currentIndex).fadeOut(1000);
        currentIndex = (currentIndex + 1) % imageCount;
        images.eq(currentIndex).fadeIn(1000);
    }

    setInterval(showNextImage, 5000); // Смена фона каждые 5 секунд
});
