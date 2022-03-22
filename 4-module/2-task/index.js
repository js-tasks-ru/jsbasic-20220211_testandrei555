function makeDiagonalRed(table) {
  const trItems = table.querySelectorAll("tr");
  for (let i = 0; i < trItems.length; i++) {
    trItems[i].querySelectorAll("td")[i].style.backgroundColor = "red";
  }
}
