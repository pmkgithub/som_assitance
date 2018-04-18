'use strict';

// NOTE: "const TASTING_EVENTS_URL = `/events`"
//        was already declared in tasting_event_delete.js
//        thus don't need to re-declare it in this file.
// ************************************************************************* //
// API DELETE - BEGIN
// ************************************************************************* //

function deleteTastingNoteFromApi(url, callback) {

  const token = localStorage.getItem('token');

  $.ajax({
    url: url,
    method: 'DELETE',
    contentType: 'application/json; charset=utf-8',
    headers: {"authorization": token},
    // data: JSON.stringify(options), // Don't need this LOC for delete.
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
  const $deleteTastingIcon = $(e.target);
  event.preventDefault();

  // const tastingId = $('.js-delete-tasting-span').attr('data-tastingid');
  const tastingId = $deleteTastingIcon.parent().attr('data-tastingid');
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