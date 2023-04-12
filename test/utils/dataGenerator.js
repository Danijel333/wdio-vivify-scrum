module.exports = {
  randomString() {
    return Math.random().toString().substring(2, 16);
  },
  randomStringFourDigits() {
    return Math.random().toString().substring(2, 6);
  },
  randomEmail() {
    return (
      Math.random().toString(36).substring(2, 11) +
      "@" +
      Math.random().toString(36).substring(2, 11) +
      ".com"
    );
  },
  getRandomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  },
  stringToNumber(element) {
    return parseInt(element.text().match(/(\d+)/)[0]);
  },
  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  },
};
