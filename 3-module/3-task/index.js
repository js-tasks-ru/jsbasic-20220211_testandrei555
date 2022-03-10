function camelize(str) {
  let arr = str.split("-");
  for (i = 1; i < arr.length; i++) {
    arr.splice(i, 1, arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return arr.join("");
}
