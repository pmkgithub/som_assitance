'use strict';

// ************************************************************************* //
// API POST - BEGIN
// ************************************************************************* //

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
  e.preventDefault();

  const eventName = $('.js-event-name').val();
  const eventHost = $('.js-event-host').val();
  const userId = localStorage.getItem('userId');

  // Server-side Validation
  // if ( !eventName ) {
  //
  //   return;
  // }

  const options = {
    eventName,
    eventHost
  };

  const TASTING_EVENT_POST_URL = `/api/events/${userId}`;
  postDataToApi(TASTING_EVENT_POST_URL, options, redirectToEventsListOnSave);
}

function redirectToEventsListOnCancel(e) {
  e.preventDefault();
  window.location = TASTING_EVENTS_URL;
}

function redirectToEventsListOnSave(response) {
  // console.log('response = ', response);

  // on AJAX success, navigate the user back to TASTING EVENTS LIST.
  const TASTING_EVENTS_URL = `/events`;
  window.location = TASTING_EVENTS_URL;
}


$(function() {

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const $newTastingEventForm = $('.event-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  $newTastingEventForm.on('submit', handleFormSubmit);
});