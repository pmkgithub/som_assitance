'use strict';

// test data for development.
// exports.events = function () {
//   return {
//     "events": [
//       {
//         "id": "1",
//         "timestamp": 1470016976601,
//         "date": "1-2-18",
//         "eventHost": "n/a",
//         "eventDesc": "Tuesday Tasting"
//       },
//       {
//         "id": "2",
//         "timestamp": 1470016976602,
//         "date": "1-3-18",
//         "eventHost": "n/a",
//         "eventDesc": "Wednesday Tasting"
//       },
//       {
//         "id": "3",
//         "timestamp": 1470016976603,
//         "date": "1-9-18",
//         "eventHost": "n/a",
//         "eventDesc": "Tuesday Tasting"
//       },
//       {
//         "id": "4",
//         "timestamp": 1470016976604,
//         "date": "1-10-18",
//         "eventHost": "n/a",
//         "eventDesc": "Wednesday Tasting"
//       },
//       {
//         "id": "5",
//         "timestamp": 1470016976605,
//         "date": "1-16-18",
//         "eventHost": "Avant Partir",
//         "eventDesc": "RHN Tasting"
//       },
//       {
//         "id": "6",
//         "timestamp": 1470016976606,
//         "date": "1-16-18",
//         "eventHost": "n/a",
//         "eventDesc": "Wednesday Tasting"
//       },
//     ]
//   }
// }
//
// exports.tastings = function () {
//   return {
//     "tastings": [
//       {
//         "id": "10",
//         "timestamp": 1470016976601,
//         "date": "xx-xx-xxx",
//         "distributor": "Avant Partir",
//         "wineName": "Blushing Bride Rose"
//       },
//       {
//         "id": "20",
//         "timestamp": 1470016976602,
//         "date": "xx-xx-xxx",
//         "distributor": "Avant Partir",
//         "wineName": "Chateau do Philip GSM Blend"
//       },
//       {
//         "id": "30",
//         "timestamp": 1470016976603,
//         "date": "xx-xx-xxx",
//         "distributor": "United",
//         "wineName": "La La La Gamay"
//       },
//       {
//         "id": "40",
//         "timestamp": 1470016976604,
//         "date": "xx-xx-xxx",
//         "distributor": "Sour Grapes",
//         "wineName": "14 Hands Chardonnay"
//       }
//     ]
//   }
// }
//
// exports.tasting_detail = function() {
//   return {
//     "tasting_detail": {
//       "id": "101",
//       "grapePrimary": "gamay"
//       "wineName": "La La La Gamay",
//       "country": "France",
//       "appellationPrimary": "Burgundy",         // supplied by drop down.
//       "appellationSecondary": "Cote de Beaune", // supplied by drop down.
//       "appellationTertiary": "Saint-Romain",    // supplied by drop down.
//       "Rating": "3",
//       "pricing": {
//         "pricing1": ['btl1', 18.00],            // first element supplied by drop down, second from user typing.
//         "pricing2": ['btl3', 17.50],
//         "pricing3": ['case1', 17.00],
//         "pricing4": ['case3', 15.00]
//       },
//       "tastingNotes": "blah blah blah"
//     }
//   }
// }


const EVENTS_DATA = {
    "events": [
      {
        "id": "1",
        "timestamp": 1470016976601,
        "date": "1-2-18",
        "eventHost": "n/a",
        "eventDesc": "Tuesday Tasting"
      },
      {
        "id": "2",
        "timestamp": 1470016976602,
        "date": "1-3-18",
        "eventHost": "n/a",
        "eventDesc": "Wednesday Tasting"
      },
      {
        "id": "3",
        "timestamp": 1470016976603,
        "date": "1-9-18",
        "eventHost": "n/a",
        "eventDesc": "Tuesday Tasting"
      },
      {
        "id": "4",
        "timestamp": 1470016976604,
        "date": "1-10-18",
        "eventHost": "n/a",
        "eventDesc": "Wednesday Tasting"
      },
      {
        "id": "5",
        "timestamp": 1470016976605,
        "date": "1-16-18",
        "eventHost": "Avant Partir",
        "eventDesc": "RHN Tasting"
      },
      {
        "id": "6",
        "timestamp": 1470016976606,
        "date": "1-16-18",
        "eventHost": "n/a",
        "eventDesc": "Wednesday Tasting"
      },
    ]
};

const TASTINGS_DATA = {
    "tastings": [
      {
        "id": "10",
        "timestamp": 1470016976601,
        "date": "xx-xx-xxx",
        "distributor": "Avant Partir",
        "wineName": "Blushing Bride Rose"
      },
      {
        "id": "20",
        "timestamp": 1470016976602,
        "date": "xx-xx-xxx",
        "distributor": "Avant Partir",
        "wineName": "Chateau do Philip GSM Blend"
      },
      {
        "id": "30",
        "timestamp": 1470016976603,
        "date": "xx-xx-xxx",
        "distributor": "United",
        "wineName": "La La La Gamay"
      },
      {
        "id": "40",
        "timestamp": 1470016976604,
        "date": "xx-xx-xxx",
        "distributor": "Sour Grapes",
        "wineName": "14 Hands Chardonnay"
      }
    ]
};

const TASTING_DETAIL_DATA = {
    "tasting_detail": {
      "id": "101",
      "grapePrimary": "gamay"
      "wineName": "La La La Gamay",
      "country": "France",
      "appellationPrimary": "Burgundy",         // supplied by drop down.
      "appellationSecondary": "Cote de Beaune", // supplied by drop down.
      "appellationTertiary": "Saint-Romain",    // supplied by drop down.
      "Rating": "3",
      "pricing": {
        "pricing1": ['btl1', 18.00],            // first element supplied by drop down, second from user typing.
        "pricing2": ['btl3', 17.50],
        "pricing3": ['case1', 17.00],
        "pricing4": ['case3', 15.00]
      },
      "tastingNotes": "blah blah blah"
    }
};

module.exports = {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA};