const names = require("./starwars-names.json");
const uniqueRandomArray = require("unique-random-array");
const getRamdonItem = uniqueRandomArray(names);

function random(number) {
  if (number === undefined) {
    return getRamdonItem();
  }

  const ramdonItems = [];

  for (let index = 0; index < number; index++) {
    ramdonItems.push(getRamdonItem());
  }

  console.log("AHORA SI");

  return ramdonItems;
}

module.exports = {
  all: names,
  random
};
