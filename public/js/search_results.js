'use strict';
// search_results.js
//  retrieve search terms from localstorage
//  send ajax POST request /api/search
//  POST success sends data to search_results.html
//  loop over data, render HTML in search_results.html

// ************************************************************************* //
// GET LOCALSTORAGE VALUES ON PAGE LOAD - BEGIN
// ************************************************************************* //
const queryGrape = localStorage.getItem('searchGrape');
const queryRating = localStorage.getItem('searchRating');
const queryPrice = localStorage.getItem('searchPrice');
console.log('queryGrape', queryGrape);
console.log('queryRating', queryRating);
console.log('queryPrice', queryPrice);

// ************************************************************************* //
// GET LOCALSTORAGE VALUES ON PAGE LOAD - END
// ************************************************************************* //