'use strict';

const TASTING_EVENTS_LIST_URL = `/events`;

// ************************************************************************* //
// API PUT - BEGIN
// ************************************************************************* //
function putTastingNoteDataToApi(url, options, callback) {

  const token = localStorage.getItem('token');

  $.ajax({
    url: url,
    method: 'PUT',
    contentType: 'application/json; charset=utf-8',
    headers: {"authorization": token},
    data: JSON.stringify(options),
    dataType: 'json',
    success: callback,
    error: function(err) { console.log('something went wrong', err); },
  });

}
// ************************************************************************* //
// API PUT - END
// ************************************************************************* //

// ************************************************************************* //
// HANDLE SUBMIT - BEGIN
// ************************************************************************* //
function handleFormSubmit(e) {
  e.preventDefault();

  // FOR PRODUCTION
  let wineName = $('#js-wine-name-input').val();
  let country = $('#js-country-select').val();
  let countryMapSrc = $('.js-country-map-img').attr('src');
  let primaryAppellation = $('#js-primary-appellation-select').val();
  let primaryAppellationMapSrc = $('.js-primary-app-map-img').attr('src');
  let secondaryAppellation = $('#js-secondary-appellation-select').val();
  let secondaryAppellationMapSrc = $('.js-secondary-app-map-img').attr('src');
  let primaryGrape = $('#js-primary-grape-select').val();
  let rating = $('#js-rating-select').val();
  let pricing1Desc = $('#js-pricing1-select').val();
  let pricing1Price = $('#js-pricing1-input').val();
  let pricing2Desc = $('#js-pricing2-select').val();
  let pricing2Price = $('#js-pricing2-input').val();
  let pricing3Desc = $('#js-pricing3-select').val();
  let pricing3Price = $('#js-pricing3-input').val();
  let pricing4Desc = $('#js-pricing4-select').val();
  let pricing4Price = $('#js-pricing4-input').val();
  let tastingNotes = $('#js-tasting-note-ta').val();


  // TODO - code Server-side Validation.
  // Server-side Validation

  // if ( !country ) { country = 'Not Selected'; } // not needed, this is a required field.
  if ( !countryMapSrc ) { countryMapSrc = ''; }
  if ( !primaryAppellation ) { primaryAppellation = 'Not Selected'; }
  if ( !primaryAppellationMapSrc ) { primaryAppellationMapSrc = ''; }
  if ( !secondaryAppellation ) { secondaryAppellation = 'Not Selected'; }
  if ( !secondaryAppellationMapSrc ) { secondaryAppellationMapSrc = ''; }
  // if ( !primaryGrape ) { primaryGrape = 'No Primary Grape Selected'; }  // not needed, this is a required field.
  // if ( !rating ) { rating = 'No Rating Selected'; } // not needed, this is a required field.

  // if ( !pricing1Desc ) { pricing1Desc = 'No Price 1 Selected'; }
  // if ( pricing1Price === "000" ) { pricing1Price = 'No Price Entered'; }
  // if ( !pricing2Desc ) { pricing2Desc = 'No Price 2 Selected'; }
  // if ( pricing2Price === "000" ) { pricing2Price = 'No Price Entered'; }
  // if ( !pricing3Desc ) { pricing3Desc = 'No Price 3 Selected'; }
  // if ( pricing3Price === "000" ) { pricing3Price = 'No Price Entered'; }
  // if ( !pricing4Desc ) { pricing4Desc = 'No Price 4 Selected'; }
  // if ( pricing4Price === "000") { pricing4Price = 'No Price Entered'; }

  const options = {
    wineName,
    country,
    countryMapSrc,
    primaryAppellation,
    primaryAppellationMapSrc,
    secondaryAppellation,
    secondaryAppellationMapSrc,
    primaryGrape,
    rating,
    pricing1Desc,
    pricing1Price,
    pricing2Desc,
    pricing2Price,
    pricing3Desc,
    pricing3Price,
    pricing4Desc,
    pricing4Price,
    tastingNotes
  };

  // NOTE: API PUT route => '/api/tastings/edit/:tastingId'
  const tastingId = localStorage.getItem('tastingId');
  putTastingNoteDataToApi(`/api/tastings/edit/${tastingId}`, options, redirectToEventsListOnSave);
}

function redirectToEventsListOnCancel() {
  window.location = TASTING_EVENTS_LIST_URL;
}

function redirectToEventsListOnSave() {
  // on AJAX success, navigate the user back to TASTING EVENTS LIST.
  window.location = TASTING_EVENTS_LIST_URL;
}
// ************************************************************************* //
// HANDLE SUBMIT - END
// ************************************************************************* //

$(function() {

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const editTastingNoteForm = $('.tasting-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  editTastingNoteForm.on('submit', handleFormSubmit);
});