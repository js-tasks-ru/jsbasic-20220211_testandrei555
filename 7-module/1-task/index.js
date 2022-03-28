import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.elem = this.#ribbonMenu();
    this.ribbonScroll = this.ribbonScroll();
  }


  ribbonScroll() {
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    const arrowLeft = this.elem.querySelector(".ribbon__arrow_left");
    const arrowRight = this.elem.querySelector(".ribbon__arrow_right");

    //scroll arrowLeft, arrowRight
    this.elem.addEventListener("click", event => {
      if (event.target.closest(".ribbon__arrow_left")) {
        ribbonInner.scrollBy(-350, 0);
      } else if (event.target.closest(".ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);
      }
    });

    //visible arrowLeft, arrowRight
    ribbonInner.addEventListener("scroll", () => {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        arrowLeft.classList.remove("ribbon__arrow_visible");
      } else {
        arrowLeft.classList.add("ribbon__arrow_visible");
      }

      if (scrollRight < 1) {
        arrowRight.classList.remove("ribbon__arrow_visible");
      } else {
        arrowRight.classList.add("ribbon__arrow_visible");
      }
    });


    for (let i = 0; i < ribbonInner.children.length; i++) {
      ribbonInner.addEventListener("click", event => {
        if (event.target.closest(".ribbon__item")) {

          //itemActive
          ribbonInner.children[i].classList.remove("ribbon__item_active");
          event.preventDefault();
          event.target.closest(".ribbon__item").classList.add("ribbon__item_active");

          //custom event
          const select = new CustomEvent('ribbon-select', {
            detail: event.target.closest(".ribbon__item").getAttribute("data-id"),
            bubbles: true
          });
          event.target.closest(".ribbon__item").dispatchEvent(select);

        }
      });
    }
  }

  #ribbonMenu() {
    return createElement(`
      <div class="ribbon">
        ${this.#arrowLeft()}
        ${this.#ribbonInner()}
        ${this.#arrowRight()}
      </div>
    `);
  }

  #ribbonInner() {
    return `
      <nav class="ribbon__inner">
        ${this.categories.map(item => `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`).join("\n")}
      </nav>
    `;
  }

  #arrowLeft() {
    return `
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;
  }

  #arrowRight() {
    return `
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `;
  }
}
