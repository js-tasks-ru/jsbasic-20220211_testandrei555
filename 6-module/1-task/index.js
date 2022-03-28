/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #name = [];
  #age = [];
  #salary = [];
  #city = [];

  constructor(rows) {
    this.#name = rows.map(item => item.name);
    this.#age = rows.map(item => item.age);
    this.#salary = rows.map(item => item.salary);
    this.#city = rows.map(item => item.city);

    this.elem = this.#table();
    this.deleteButton = this.deleteButton();
  }

  deleteButton() {
    this.elem.addEventListener("click", event => {
      if (event.target.closest(".button")) {
        event.target.closest(".delBut").remove();
      }
    });
  }

  #table() {
    const newTable = document.createElement("table");
    newTable.classList.add("newTable");
    newTable.insertAdjacentHTML("afterbegin", `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
    `);
    newTable.insertAdjacentElement("beforeend", this.#tbody());
    return newTable;
  }

  #tbody() {
    const newTbody = document.createElement("tbody");
    for (let i = 0; i < this.#name.length; i++) {
      newTbody.insertAdjacentHTML("beforeend", `
        <tr class="delBut">
          <td>${this.#name[i]}</td>
          <td>${this.#age[i]}</td>
          <td>${this.#salary[i]}</td>
          <td>${this.#city[i]}</td>
          <td><button class="button">X</button></td>
        </tr>
      `);
    }
    return newTbody;
  }
}
