const names = require('./starwars-names.json')
const uniqueRandomArray = require('unique-random-array')

module.exports = {
  all: names,
  random: uniqueRandomArray(names)
}
