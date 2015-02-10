var LARDER = "[\n  " + [
{ "labelID": "24", "name": "WW flour", "quantity": 11, "units": "lb", "dateIn": "2/1/15", "life": 45  },
{ "labelID": "25", "name": "Avocado", "quantity": 3, "units": "ea", "dateIn": "2/1/15", "life": 10  },
{ "labelID": "26", "name": "milk", "quantity": 1, "units": "half-gal", "dateIn": "2/6/15", "life": 8  },
{ "labelID": "27", "name": "butter", "quantity": 2, "units": "lb", "dateIn": "2/1/15", "life": 20  },
{ "labelID": "28", "name": "salt", "quantity": 1, "units": "lb", "dateIn": "1/20/15", "life": 365  },
{ "labelID": "29", "name": "Cream cheese", "quantity": 3, "units": "lb", "dateIn": "1/10/15", "life": 45  }
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = LARDER_FILE ;
