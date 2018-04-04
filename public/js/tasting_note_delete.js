'use strict';

const TASTING_EVENTS_URL = `/events`;
// ************************************************************************* //
// API DELETE - BEGIN
// ************************************************************************* //

function deleteTastingNoteFromApi(url, callback) {
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

function deleteTastingNote(event) {
  event.preventDefault();

  const tastingId = $('.js-delete-tasting-note').attr('data-tastingid');
  const TASTING_EVENT_DELETE_URL = `/api/tastings/${tastingId}`;

  deleteTastingNoteFromApi(TASTING_EVENT_DELETE_URL, redirectToEventsListOnDelete);
}

function redirectToEventsListOnDelete() {
  window.location = TASTING_EVENTS_URL;
}


$(function() {
  // listeners
  const $tastingEventsList = $('.js-events-list-wrapper');
  $tastingEventsList.on('click', '.js-delete-tasting-note', deleteTastingNote);
});