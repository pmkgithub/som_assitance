'use strict';

// ************************************************************************* //
// API POST - BEGIN
// ************************************************************************* //

const TASTING_EVENTS_URL = `/events`;
// const TASTING_EVENT_POST_URL = `/api/events/:eventId/tastings`; // url for production
const TASTING_NOTE_POST_URL = `/api/events/5/tastings`; // temp url for testing

function postDataToApi(url, options, callback) {
  console.log('options inside postDataToApi() = ', options);
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

  // FOR PRODUCTION
  // const eventHost = $('js-event-host.').val();
  // const wineName = $('#js-wine-name-input').val();
  // const country = $('#js-country-select').val();
  // const primaryAppellation = $('#js-primary-appellation-select').val();
  // const secondaryAppellation = $('#js-secondary-appellation-select').val();
  // const primaryGrape = $('#js-primary-grape-select').val();
  // const rating = $('#js-rating-select').val();
  // const pricing1 = $('#js-pricing-1-select').val();
  // const pricing1Price = $('#js-pricing-1-price-input').val();
  // const pricing2 = $('#js-pricing-2-select').val();
  // const pricing2Price = $('#js-pricing-2-price-input').val();
  // const pricing3 = $('#js-pricing-3-select').val();
  // const pricing3Price = $('#js-pricing-3-price-input').val();
  // const pricing4 = $('#js-pricing-4-select').val();
  // const pricing4Price = $('#js-pricing-4-price-input').val();
  // const tastingNotes = $('#js-tasting-note-ta').val();

  // FOR TESTING
  const eventHost = 'Avant Partir';
  const wineName = 'Wow Wine';
  const country = 'France';
  const primaryAppellation = 'Bordeaux';
  const secondaryAppellation = 'Langon';
  const primaryGrape = 'Bordeaux Blend';
  const rating = '2';
  const pricing1 = 'btl_1';
  const pricing1Price = '20.00';
  const pricing2 = 'btl_2';
  const pricing2Price = '19.00';
  const pricing3 = 'btl_3_plus';
  const pricing3Price = '18.00';
  const pricing4 = 'case_2';
  const pricing4Price = '17.00';
  const tastingNotes = 'blah blah blah';
  const eventId = '5';

  // Server-side Validation
  // if ( !eventName ) {
  //
  //   return;
  // }

  const options = {
    eventHost,
    wineName,
    country,
    primaryAppellation,
    secondaryAppellation,
    primaryGrape,
    rating,
    pricing1: {
      desc: pricing1,
      price: pricing1Price
    },
    pricing2: {
      desc: pricing2,
      price: pricing2Price
    },
    pricing3: {
      desc: pricing3,
      price: pricing3Price
    },
    pricing4: {
      desc: pricing4,
      price: pricing4Price
    },
    tastingNotes,
    eventId
  };

  console.log('options', options);
  // return false;
  postDataToApi(TASTING_NOTE_POST_URL, options, redirectToEventsListOnSave);
}

function redirectToEventsListOnCancel(event) {
  event.preventDefault();
  window.location = TASTING_EVENTS_URL;
}

function redirectToEventsListOnSave(data) {
  console.log('res data = ', data);
  // console.log(data.message);
  // on AJAX success, navigate the user back to TASTING EVENTS LIST.
  window.location = TASTING_EVENTS_URL;
}


$(function() {

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const newTastingNoteForm = $('.tasting-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  newTastingNoteForm.on('submit', handleFormSubmit);
});