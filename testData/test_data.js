'use strict';

const EVENTS_DATA = {
    "events": [
      {
        "id": "1",
        "timestamp": 1470016976601,
        "date": "1-2-18",
        "eventHost": "Sour Grapes",
        "eventName": "Tuesday Tasting"
      },
      {
        "id": "2",
        "timestamp": 1470016976602,
        "date": "1-2-18",
        "eventHost": "Quality",
        "eventName": "Tuesday Tasting"
      },
      {
        "id": "3",
        "timestamp": 1470016976603,
        "date": "1-2-18",
        "eventHost": "Avant Partir",
        "eventName": "Tuesday Tasting"
      },
      {
        "id": "4",
        "timestamp": 1470016976604,
        "date": "1-3-18",
        "eventHost": "United",
        "eventName": "Wednesday Tasting"
      },
      {
        "id": "5",
        "timestamp": 1470016976605,
        "date": "1-3-18",
        "eventHost": "Northeast",
        "eventName": "Wednesday Tasting"
      },
      {
        "id": "6",
        "timestamp": 1470016976606,
        "date": "1-9-18",
        "eventHost": "Sour Grapes",
        "eventName": "Tuesday Tasting"
      },
      {
        "id": "7",
        "timestamp": 1470016976607,
        "date": "1-10-18",
        "eventHost": "United",
        "eventName": "Wednesday Tasting"
      },
      {
        "id": "8",
        "timestamp": 1470016976608,
        "date": "1-16-18",
        "eventHost": "Avant Partir",
        "eventName": "RHN Tasting"
      },
      {
        "id": "9",
        "timestamp": 1470016976609,
        "date": "1-17-18",
        "eventHost": "United",
        "eventName": "Wednesday Tasting"
      },
      {
        "id": "10",
        "timestamp": 1470016976610,
        "date": "1-17-18",
        "eventHost": "Northeast",
        "eventName": "Wednesday Tasting"
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
        "distributor": "Avant Partir",
        "wineName": "La La La Gamay"
      },
      {
        "id": "40",
        "timestamp": 1470016976604,
        "date": "xx-xx-xxx",
        "distributor": "Avant Partir",
        "wineName": "14 Hands Chardonnay"
      }
    ]
};

const TASTING_DETAIL_DATA = {
    "tastingDetail": {
      "id": "101",
      "timestamp": 1470016976603,
      "date": "xx-xx-xxxx",
      "eventHost": "Avant Partir",
      "wineName": "La La La Gamay",
      "grapePrimary": "gamay",
      "country": "France",
      "appellationPrimary": "Burgundy",         // supplied by drop down.
      "appellationSecondary": "Cote de Beaune", // supplied by drop down.
      "appellationTertiary": "Saint-Romain",    // supplied by drop down.
      "rating": "3",
      "pricing": {
        "pricing1": ['Btl 1', '18.00'],            // first element supplied by drop down, second from user typing.
        "pricing2": ['Btl 3', '17.50'],
        "pricing3": ['Case 1', '17.00'],
        // "pricing4": null
        "pricing4": ['n/a']
      },
      "tastingNotes": "blah blah blah"
    }
};

module.exports = {EVENTS_DATA, TASTINGS_DATA, TASTING_DETAIL_DATA};