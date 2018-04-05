'use strict';

// NOTE:
// 1) tastingId already grabbed from localStorage when tasting_note_form_edit_populate.js loads.
// 2) TASTING_NOTE_API_URL already defined when tasting_note_form_edit_populate.js loads.
const TASTING_EVENTS_LIST_URL = `/events`;

// // ************************************************************************* //
// // API GET AND POPULATE FORM - BEGIN
// // ************************************************************************* //
// // Fetch Event from API.
// function getOneTastingFromApi(url, options, callback) {
//   console.log('getOneTastingFromApi ran');
//   console.log('url = ', url);
//   $.ajax({
//     url: url,
//     type: 'GET',
//     dataType: 'json',
//     data: options,
//     success: callback,
//     error: function() { console.log('something went wrong'); },
//   });
// }
//
// // Populate the Event Form with fetched data.
// const populateTastingForm = (tastingNote) => {
//   console.log('populateTastingForm ran');
//   console.log('tastingNote = ', tastingNote);
//   $('#js-wine-name-input').val(tastingNote.wineName);
//   $('#js-country-select').val(tastingNote.country);
//   $('.js-country-map-img').attr('src', tastingNote.countryMapSrc);
//   $('#js-primary-appellation-select').val(tastingNote.primaryAppellation);
//   $('.js-primary-app-map-img').attr('src', tastingNote.primaryAppellationMapSrc);
//   $('#js-secondary-appellation-select').val(tastingNote.secondaryAppellation);
//   $('.js-secondary-app-map-img').attr('src', tastingNote.secondaryAppellationMapSrc);
//   $('#js-primary-grape-select').val(tastingNote.primaryGrape);
//   $('#js-rating-select').val(tastingNote.rating);
//   $('#js-pricing1-select').val(tastingNote.pricing1Desc);
//   $('#js-pricing1-input').val(tastingNote.pricing1Price);
//   $('#js-pricing2-select').val(tastingNote.pricing2Desc);
//   $('#js-pricing2-input').val(tastingNote.pricing2Price);
//   $('#js-pricing3-select').val(tastingNote.pricing3Desc);
//   $('#js-pricing3-input').val(tastingNote.pricing3Price);
//   $('#js-pricing4-select').val(tastingNote.pricing4Desc);
//   $('#js-pricing4-input').val(tastingNote.pricing4Price);
//   $('#js-tasting-note-ta').val(tastingNote.tastingNotes);
// };
// // ************************************************************************* //
// // API GET AND POPULATE FORM - END
// // ************************************************************************* //

// ************************************************************************* //
// API PUT - BEGIN
// ************************************************************************* //

function putEventDataToApi(url, options, callback) {
  console.log('options inside postDataToApi() = ', options);
  $.ajax({
    url: url,
    method: 'PUT',
    contentType: 'application/json; charset=utf-8',
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
// HANDLE FORM SUBMIT - BEGIN
// ************************************************************************* //
function handleFormSubmit(e) {
  e.preventDefault();

  const eventName = $('.js-event-name').val();
  const eventHost = $('.js-event-host').val();


  // Server-side Validation
  // if ( !eventName ) {
  //
  //   return;
  // }

  const options = {
    eventName,
    eventHost
  };

  // putEventDataToApi(TASTING_NOTE_API_URL, options, redirectToEventsListOnSave);
}

function redirectToEventsListOnCancel(e) {
  e.preventDefault();
  window.location = TASTING_EVENTS_LIST_URL;
}

function redirectToEventsListOnSave(data) {
  // on AJAX success, navigate the user back to TASTING EVENTS LIST.
  window.location = TASTING_EVENTS_LIST_URL;
}
// ************************************************************************* //
// HANDLE FORM SUBMIT - END
// ************************************************************************* //

$(function() {
  // get data for TASTING NOTE EDIT form page loads.
  let options = {};
  getOneTastingFromApi(TASTING_NOTE_API_URL, options, populateTastingForm);

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const $tastingNoteEditForm = $('.tasting-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  $tastingNoteEditForm.on('submit', handleFormSubmit);
});