import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.elem = this.#carousel();
    this.initCarousel = this.initCarousel();
  }

  initCarousel() {
    const carouselInner = this.elem.querySelector(".carousel__inner");
    const carouselRight = this.elem.querySelector(".carousel__arrow_right");
    const carouselLeft = this.elem.querySelector(".carousel__arrow_left");

    let i = 0;
    carouselLeft.style.display = "none";

    this.elem.addEventListener("click", event => {
      if (event.target.closest(".carousel__button")) {
        const add = new CustomEvent("product-add", {
          detail: this.slides[Math.abs(i)].id,
          bubbles: true,
        });
        event.target.closest(".carousel__button").dispatchEvent(add);
      }

      if (event.target.closest(".carousel__arrow_right")) {
        i--;
        carouselInner.style.transform = `translateX(${i * carouselInner.clientWidth}px)`;
      } else if (event.target.closest(".carousel__arrow_left")) {
        i++;
        carouselInner.style.transform = `translateX(${i * carouselInner.clientWidth}px)`;
      }

      if (i === 0) {
        carouselLeft.style.display = "none";
      } else if (i === -this.slides.length + 1) {
        carouselRight.style.display = "none";
      } else {
        carouselLeft.style.display = "";
        carouselRight.style.display = "";
      }
    });
  }

  #carousel() {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.insertAdjacentHTML("afterbegin", `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `);

    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel__inner");
    for (let i = 0; i < this.slides.length; i++) {
      carouselInner.insertAdjacentHTML("beforeend", `
        <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">&euro;${this.slides[i].price.toFixed(2)}</span>
            <div class="carousel__title">${this.slides[i].name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);
    }
    carousel.insertAdjacentElement("beforeend", carouselInner);

    return createElement(carousel.outerHTML);
  }
}
