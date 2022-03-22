function highlight(table) {
  const trItems = table.querySelectorAll("tbody")[0].querySelectorAll("tr");
  for (let i = 0; i < trItems.length; i++) {

    //Status
    if (trItems[i].querySelectorAll("td")[3].hasAttribute("data-available")) {
        if (trItems[i].querySelectorAll("td")[3].getAttribute("data-available") === "true") {
          trItems[i].classList.add("available");
        } else {
          trItems[i].classList.add("unavailable");
        }
    } else {
        trItems[i].setAttribute("hidden", "");
    }

    //Gender
    if (trItems[i].querySelectorAll("td")[2].textContent === "m") {
        trItems[i].classList.add("male");
    } else if (trItems[i].querySelectorAll("td")[2].textContent === "f") {
        trItems[i].classList.add("female");
    }

    //Age
    if (trItems[i].querySelectorAll("td")[1].textContent < 18) {
        trItems[i].style.textDecoration = "line-through";
    }
  }
}
