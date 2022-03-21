function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselInner = document.querySelector(".carousel__inner");
  const carouselWidth = carouselInner.clientWidth;
  const carouselRight = document.querySelector(".carousel__arrow_right");
  const carouselLeft = document.querySelector(".carousel__arrow_left");

  let i = 0;
  carouselLeft.style.display = 'none';

  carousel.addEventListener("click", function(event) {
    if (event.target.closest(".carousel__arrow_right")) {
      i--;
      carouselInner.style.transform = `translateX(${i * carouselWidth}px)`;
    } else if (event.target.closest(".carousel__arrow_left")) {
      i++;
      carouselInner.style.transform = `translateX(${i * carouselWidth}px)`;
    }

    if (i === 0) {
      carouselLeft.style.display = 'none';
    } else if (i === -3) {
      carouselRight.style.display = 'none';
    } else {
      carouselLeft.style.display = '';
      carouselRight.style.display = '';
    }
  });
}
