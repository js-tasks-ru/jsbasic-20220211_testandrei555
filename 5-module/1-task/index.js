function hideSelf() {
  const button = document.querySelector(".hide-self-button");
  button.addEventListener("click", function(event) {
    button.setAttribute("hidden", "true");
  });
}
