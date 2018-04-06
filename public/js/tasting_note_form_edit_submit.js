'use strict';

const TASTING_EVENTS_LIST_URL = `/events`;

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

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const $tastingNoteEditForm = $('.tasting-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  $tastingNoteEditForm.on('submit', handleFormSubmit);
});