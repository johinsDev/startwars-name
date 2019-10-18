/*
 * index.test.js
 * Copyright (C) 2019 johan.villamilchiper.com <johan.villamilchiper.com@Johans-iMac.local>
 *
 * Distributed under terms of the MIT license.
 */
(function() {
  "use strict";

  const expect = require("chai").expect;

  const starwars = require("./index.js");

  describe("starwars-names", function() {
    describe("all", function() {
      it("should be an array of strings", function() {
        expect(starwars.all).to.satisfy(isArrayOfStrings);

        function isArrayOfStrings(array) {
          return array.every(function(item) {
            return typeof item === "string";
          });
        }
      });

      it("sould contain `Luke Skywalwer`", function() {
        expect(starwars.all).to.include("Luke Skywalker");
      });
    });

    describe("random", function() {
      it("should return a random item from the starwars all.", function() {
        const randomItem = starwars.random();

        expect(starwars.all).to.include(randomItem);
      });

      it("should return a array of ramdon items if passed a number.", function() {
        const randomItems = starwars.random(3);

        expect(randomItems).to.have.length(3);

        randomItems.forEach(item => {
          expect(starwars.all).to.include(item);
        });
      });
    });
  });
})();
