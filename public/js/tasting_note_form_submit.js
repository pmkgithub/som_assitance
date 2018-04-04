'use strict';



// ************************************************************************* //
// API POST - BEGIN
// ************************************************************************* //
// TODO - POST live Tasting Form data - js/tasting_note_form_submit.js.
const TASTING_EVENTS_URL = `/events`;

function postDataToApi(url, options, callback) {
  $.ajax({
    url: url,
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(options),
    dataType: 'json',
    success: callback,
    error: function(err) { console.log('something went wrong', err); },
  });

}

// ************************************************************************* //
// API POST - END
// ************************************************************************* //

function handleFormSubmit(e) {
  console.log('handleFormSubmit ran');
  e.preventDefault();

  console.log('window.location.url = ', window.location.href);
  // FOR PRODUCTION
  // let eventHost = 'Avant Partir';
  // let eventId = '5ac2993292857c46b74c9245';
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

  // // FOR TESTING
  // let eventHost = 'Avant Partir';
  // let eventId = '5ac2993292857c46b74c9245';
  //
  // let wineName = 'Wow Wine';
  // let country = 'France';
  // let countryMapSrc = "";
  // let primaryAppellation = 'Bordeaux';
  // let primaryAppellationMapSrc = "";
  // let secondaryAppellation = 'Langon';
  // let secondaryAppellationMapSrc = "";
  // let primaryGrape = 'Bordeaux Blend';
  // let rating = '2';
  // let pricing1Desc = 'Btl 1';
  // let pricing1Price = '20.00';
  // let pricing2Desc = 'Btl 2';
  // let pricing2Price = '19.00';
  // let pricing3Desc = 'Case 1 (12 Count)';
  // let pricing3Price = '18.00';
  // let pricing4Desc = 'Case 5 (12 Count)';
  // let pricing4Price = '17.00';
  // let tastingNotes = 'blah blah blah';

  // TODO - code Server-side Validation.
  // Server-side Validation

  if ( !country ) { country = 'No Country Selected'; }
  if ( !countryMapSrc ) { countryMapSrc = ''; }
  if ( !primaryAppellation ) { primaryAppellation = 'No Primary Appellation Selected'; }
  if ( !primaryAppellationMapSrc ) { primaryAppellationMapSrc = ''; }
  if ( !secondaryAppellation ) { secondaryAppellation = 'No Secondary Appellation Selected'; }
  if ( !secondaryAppellationMapSrc ) { secondaryAppellationMapSrc = ''; }
  if ( !primaryGrape ) { primaryGrape = 'No Primary Grape Selected'; }
  if ( !rating ) { rating = 'No Rating Selected'; }
  if ( !pricing1Desc ) { pricing1Desc = 'No Price 1 Selected'; }
  if ( !pricing1Price ) { pricing1Price = 'No Price Inputted'; }
  if ( !pricing2Desc ) { pricing2Desc = 'No Price 2 Selected'; }
  if ( !pricing2Price ) { pricing2Price = 'No Price Inputted'; }
  if ( !pricing3Desc ) { pricing3Desc = 'No Price 3 Selected'; }
  if ( !pricing3Price ) { pricing3Price = 'No Price Inputted'; }
  if ( !pricing4Desc ) { pricing4Desc = 'No Price 4 Selected'; }
  if ( !pricing4Price ) { pricing4Price = 'No Price Inputted'; }

  const options = {
    // eventHost,  // TODO - stuck - how do I get eventHost variable into form when it loads?
    // eventId,    // TODO - stuck - how do I get eventId variable into form when it loads?
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

  console.log('tasting_note_form_submit.js options = ', options);
  let eventId = '5ac2993292857c46b74c9245';
  // const TASTING_NOTE_POST_URL = `/api/events/5abe1f15b6440d32545ea073/tastings`; // temp url for testing
  const TASTING_NOTE_POST_URL = `/api/events/5ac2993292857c46b74c9245/tastings`; // temp url for testing
  const TASTING_NOTE_POST_URL = `/api/events/${eventId}/tastings`; // temp url for testing
  postDataToApi(TASTING_NOTE_POST_URL, options, redirectToEventsListOnSave);
}

function redirectToEventsListOnCancel(event) {
  event.preventDefault();
  window.location = TASTING_EVENTS_URL;
}

function redirectToEventsListOnSave(data) {
  console.log(data.message);
  // on AJAX success, navigate the user back to TASTING EVENTS LIST.
  window.location = TASTING_EVENTS_URL;
}


$(function() {

  // function getEventIdFromUrl() {
  //   const url = window.location.href;
  //   const arr = url.split("/");
  //   console.log('arr ', arr);
  //   const eventId = arr[4];
  //   console.log('eventId =', eventId);
  // }
  // getEventIdFromUrl();

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const newTastingNoteForm = $('.tasting-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  newTastingNoteForm.on('submit', handleFormSubmit);
});