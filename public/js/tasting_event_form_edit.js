'use strict';

// Grab the eventId from localStorage (set when "Edit" is clicked on Event List.
const eventId = localStorage.getItem('eventId');
console.log('eventId', eventId);
const TASTING_EVENTS_LIST_URL = `/events`;
const TASTING_EVENT_API_URL = `/api/events/${eventId}`;


// ************************************************************************* //
// API GET AND POPULATE FORM - BEGIN
// ************************************************************************* //
// Fetch Event from API.
function getOneEventFromApi(url, options, callback) {

  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    data: options,
    success: callback,
    error: function() { console.log('something went wrong'); },
  });
}

// Populate the Event Form with fetched data.
const populateEventForm = (tastingEvent) => {
  console.log('event = ', event);
  const {eventName, eventHost} = tastingEvent;
  $('#event-name').val(eventName);
  $('#event-host').val(eventHost);
};
// ************************************************************************* //
// API GET AND POPULATE FORM - END
// ************************************************************************* //

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
// API POST - END
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

  putEventDataToApi(TASTING_EVENT_API_URL, options, redirectToEventsListOnSave);
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
  // get data for events view when events list loads.
  let options = {};
  getOneEventFromApi(TASTING_EVENT_API_URL, options, populateEventForm);

  // listeners
  const $cancelButton = $('.js-button-cancel');
  const $editTastingEventForm = $('.event-form');
  $cancelButton.on('click', redirectToEventsListOnCancel);
  $editTastingEventForm.on('submit', handleFormSubmit);
});