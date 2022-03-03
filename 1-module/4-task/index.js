function checkSpam(str) {
  let text = "1xBet", text2 = "XXX";
  return str.toLowerCase().includes(text.toLowerCase()) || str.toLowerCase().includes(text2.toLowerCase());
}
