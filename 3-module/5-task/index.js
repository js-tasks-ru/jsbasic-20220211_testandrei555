function getMinMax(str) {
  let arr = str.split(" ").filter(item => +item);
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
