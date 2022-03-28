export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.elem = this.#slider();
    this.sliderClick = this.sliderClick();
  }

  sliderClick() {
    const sliderValue = this.elem.querySelector(".slider__value");
    const sliderSteps = this.elem.querySelector(".slider__steps");
    const stepsChildren = sliderSteps.children;
    stepsChildren[this.value].classList.add("slider__step-active");

    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let oneStep = 100 / (this.steps - 1);

    this.elem.addEventListener("click", event => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);


      thumb.style.left = `${oneStep * value}%`;

      sliderValue.innerHTML = `${value}`;

      progress.style.width = `${oneStep * value}%`;

      for (let i = 0; i < this.steps; i++) {
        stepsChildren[i].classList.remove("slider__step-active");
      }
      stepsChildren[value].classList.add("slider__step-active");


      const change = new CustomEvent('slider-change', {
        detail: value,
        bubbles: true
      });
      this.elem.dispatchEvent(change);
    });
  }

  #slider() {
    const slider = document.createElement("div");
    slider.classList.add("slider");
    let oneStep = 100 / (this.steps - 1);
    slider.innerHTML = `
      <div class="slider__thumb" style="left: ${oneStep * this.value}%;">
        <span class="slider__value">${this.value}</span>
      </div>

      <div class="slider__progress" style="width: ${oneStep * this.value}%;"></div>

      <div class="slider__steps">
        ${`<span></span>`.repeat(this.steps)}
      </div>
    `;
    return slider;
  }
}
