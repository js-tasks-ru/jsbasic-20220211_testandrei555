function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  button.addEventListener("click", function(event) {
    const text = document.querySelector("#text");
    if (text.hasAttribute("hidden")) {
      text.removeAttribute("hidden");
    } else {
      text.setAttribute("hidden", "true");
    }
  });
}
