import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = this.modal();
    this.closeEvent = this.closeEvent();
  }

  closeEvent() {
    const modalClose = this.modal.querySelector(".modal__close");

    modalClose.addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", event => {
      if (event.code === 'Escape') {
        this.close();
      }
    }, {once: true});
  }

  open() {
    document.body.classList.add("is-modal-open");
    document.body.append(this.modal);
  }

  close() {
    if (document.querySelector(".modal")) {
      document.body.classList.remove("is-modal-open");
      document.querySelector(".modal").remove();
    }
  }

  setTitle(title) {
    const modalTitle = this.modal.querySelector(".modal__title");
    modalTitle.innerHTML = `${title}`;
  }

  setBody(body) {
    const modalBody = this.modal.querySelector(".modal__body");
    modalBody.insertAdjacentElement("afterbegin", body);
  }

  modal() {
    return createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>

        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>

            <h3 class="modal__title"></h3>
          </div>

          <div class="modal__body"></div>
        </div>

    </div>
    `);
  }
}
