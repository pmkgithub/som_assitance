'use strict';

// NOTE: This was already declared in tasting_event_delete.js
// const TASTING_EVENTS_URL = `/events`;
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

// ************************************************************************* //
// DELETE TASTING NOTE - BEGIN
// ************************************************************************* //
function deleteTastingNote(e) {
  console.log('tasting_note-delete.js deleteTastingNote ran');
  const $clickedDeleteTastingSpan = $(e.target);
  console.log('$clickedDeleteTastingSpan = ', $clickedDeleteTastingSpan);
  event.preventDefault();

  // const tastingId = $('.js-delete-tasting-span').attr('data-tastingid');
  const tastingId = $clickedDeleteTastingSpan.attr('data-tastingid');
  const TASTING_NOTE_DELETE_URL = `/api/tastings/${tastingId}`;

  deleteTastingNoteFromApi(TASTING_NOTE_DELETE_URL, redirectToEventsListOnDelete);
}

function redirectToEventsListOnDelete() {
  window.location = TASTING_EVENTS_URL;
}

// ************************************************************************* //
// DELETE TASTING NOTE - END
// ************************************************************************* //
$(function() {
  // listeners
  const $tastingEventsList = $('.js-events-list-wrapper');
  $tastingEventsList.on('click', '.js-delete-tasting-span', deleteTastingNote);
});