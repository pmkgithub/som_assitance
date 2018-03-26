'use strict';

const TASTING_EVENTS_URL = `/events`;
const TASTING_EVENT_POST_URL = `/api/events/new`;

// ************************************************************************* //
// API POST - BEGIN
// ************************************************************************* //

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

function handleFormSubmit(event) {
  event.preventDefault();

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

  postDataToApi(TASTING_EVENT_POST_URL, options, redirectToEventsListOnSave);
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
  const $newTastingEventForm = $('.event-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  $newTastingEventForm.on('submit', handleFormSubmit);
});