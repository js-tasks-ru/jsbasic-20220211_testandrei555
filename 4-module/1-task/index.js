function makeFriendsList(friends) {
  const newElement = document.createElement("ul");
  friends.forEach(item => newElement.insertAdjacentHTML("beforeend", `<li>${item.firstName} ${item.lastName}</li>`));
  return newElement;
}
