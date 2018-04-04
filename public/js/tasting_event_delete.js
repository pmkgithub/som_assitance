'use strict';

const TASTING_EVENTS_URL = `/events`;
// ************************************************************************* //
// API DELETE - BEGIN
// ************************************************************************* //

function deleteEventFromApi(url, callback) {
  $.ajax({
    url: url,
    method: 'DELETE',
    contentType: 'application/json; charset=utf-8',
    // data: JSON.stringify(options),
    dataType: 'json',
    success: callback,
    error: function(err) { console.log('something went wrong', err); },
  });

}

// ************************************************************************* //
// API DELETE - END
// ************************************************************************* //

// ************************************************************************* //
// DELETE EVENT - BEGIN
// ************************************************************************* //
function deleteEvent(e) {
  console.log('tasting_event_delete deleteEvent ran');
  // When deleting an Event, the associated Tasting Notes must be deleted too.
  const $clickedDeleteEventSpan = $(e.target);
  event.preventDefault();

  const eventId = $clickedDeleteEventSpan.attr('data-eventid');
  const TASTING_EVENT_DELETE_URL = `/api/events/${eventId}`;
  console.log('TASTING_EVENT_DELETE_URL', TASTING_EVENT_DELETE_URL);

  deleteEventFromApi(TASTING_EVENT_DELETE_URL, redirectToEventsListOnDelete);
}

function redirectToEventsListOnDelete() {
  window.location = TASTING_EVENTS_URL;
}
// ************************************************************************* //
// DELETE EVENT - END
// ************************************************************************* //

$(function() {
  // listeners
  const $tastingEventsList = $('.js-events-list-wrapper');
  $tastingEventsList.on('click', '.js-delete-event-span', deleteEvent);
});