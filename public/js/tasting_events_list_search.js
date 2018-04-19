'use strict';

const $primaryGrapeSelect = $('#js-search-primary-grape-select');
const $ratingSelectInput = $('#js-search-rating-select');
const $priceInput = $('#js-search-price');

// ************************************************************************* //
// Reset Search Form - BEGIN
// ************************************************************************* //
const resetSearchForm = () => {
  $primaryGrapeSelect.val('');
  $ratingSelectInput.val('');
  $priceInput.val('');

  localStorage.setItem('searchGrape', $primaryGrapeSelect.val());
  localStorage.setItem('searchRating', $ratingSelectInput.val());
  localStorage.setItem('searchPrice', $priceInput.val());
};
// ************************************************************************* //
// Reset Search Form - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Primary Grape Select Input - BEGIN
// ************************************************************************* //

const getGrapes = () => {
  let grapes = [];

  // get all grapes.
  Object.keys(PRIMARY_GRAPES).forEach((grape) => {
    grapes.push(PRIMARY_GRAPES[grape].grapeName);
  });

  grapes.sort();
  grapes.push("Other");
  grapes.push("Don't Know");
  return grapes;

};
// populate Search Form Primary Grape Select
const buildPrimaryGrapesSelectInput = () => {
  const $primaryGrapeSelectInput = $('#js-search-primary-grape-select');
  const primaryGrapes = getGrapes();
  let html = `<option value="" disabled selected>Select a Primary Grape</option>`;

  primaryGrapes.forEach((grape) => {
    html += `<option value="${grape}">${grape}</option>`;
  });
  $primaryGrapeSelectInput.append(html);
};
// ************************************************************************* //
// Populate Primary Grape Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Submit - BEGIN
// ************************************************************************* //
const SEARCH_RESULTS_PAGE_URL = '/searchresults';

function handleFormSubmit(e) {
  e.stopPropagation(); // keeps URL clean, no querystring characters will display.
  e.preventDefault();

  // set localstorage.
  localStorage.setItem('searchGrape', $primaryGrapeSelect.val());
  localStorage.setItem('searchRating', $ratingSelectInput.val());
  localStorage.setItem('searchPrice', $priceInput.val());

  // load the SEARCH tastings page.
  window.location = SEARCH_RESULTS_PAGE_URL;

}

// ************************************************************************* //
// Handle Submit - END
// ************************************************************************* //

$(function() {
  resetSearchForm();  // reset Search Form on Event List Page Load.
  buildPrimaryGrapesSelectInput();

  // LISTENERS
  const $searchFormInEventsListPage = $('.events-list-page-wrapper .search-form');  // works, but best to stop "submit event" at the form.
  $searchFormInEventsListPage.on('submit', handleFormSubmit);

});