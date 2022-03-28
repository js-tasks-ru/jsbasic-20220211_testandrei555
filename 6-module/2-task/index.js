export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this.elem = this.#card();
    this.plusButton = this.plusButton();
  }

  plusButton() {
    this.elem.addEventListener("click", event => {
      if (event.target.closest(".card__button")) {
        const add = new CustomEvent("product-add", {
          detail: this.id,
          bubbles: true,
        });
        event.target.closest(".card__button").dispatchEvent(add);
      }
    });
  }

  #card() {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.insertAdjacentHTML("afterbegin", `
      <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">&euro;${this.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `);
    return newCard;
  }
}
