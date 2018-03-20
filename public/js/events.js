'use strict';

let STATE = {
  tastingsFetched: {
  }
};

// ************************************************************************* //
// API Fetch - BEGIN
// ************************************************************************* //

function getDataFromApi(url, options, callback) {
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    data: options,
    success: callback,
    error: function() { console.log('something went wrong'); },
  });
}

// ************************************************************************* //
// API Fetch - END
// ************************************************************************* //


// ************************************************************************* //
// EVENTS LIST - BEGIN
// ************************************************************************* //

function renderEventsList(data) {
  for (let i = 0; i < data.events.length ; i++) {
    // populate STATE object "tastingsFetched" object for each TASTING EVENT.
    STATE.tastingsFetched[data.events[i].id] = false;

    // render EVENTS.
    $('.events').append(
      // '<p>' + data.events[i].eventDesc + '</p>');
      `<li class="js-event" data-eventid="${data.events[i].id}">
        ${data.events[i].date} - ${data.events[i].eventDesc} - ${data.events[i].eventHost}
        <ul class="tastings"></ul>
       </li>`);
  }
}

// ************************************************************************* //
// EVENTS LIST - END
// ************************************************************************* //

// ************************************************************************* //
// TASTINGS LIST - BEGIN
// ************************************************************************* //
function getTastingsData(event) {
  const $event = $(event.target);
  const eventId = $event.attr("data-eventid");

  function displayTastingsList(data) {
    for (let i = 0; i < data.tastings.length ; i++) {
      $event.find('.tastings').append(
        `<li>${data.tastings[i].wineName} - (${data.tastings[i].distributor} -  ${data.tastings[i].date})</li>`);
    }
  }

  if( !STATE.tastingsFetched[eventId] ) {
    // Fetch TASTINGS data once, set flag to false to prevent subsequent fetches.
    STATE.tastingsFetched[eventId] = true;
    getDataFromApi(`/api/events/${eventId}`, {}, displayTastingsList);
  } else {
    $event.find('.tastings').toggle();
  }
}
// ************************************************************************* //
// TASTINGS LIST - END
// ************************************************************************* //


// ************************************************************************* //
// TASTINGS DETAIL - BEGIN
// ************************************************************************* //

// function getTastingDetailData(callbackFn) {
//   setTimeout(function(){ callbackFn(MOCK_TASTING_DETAIL_DATA)}, 100);
// }
//
// // this function stays the same when we connect
// // to real API later
function displayTastingDetail(data) {
    $(ul).append(
      '<p>' + data.tastingNotes.date + '</p>' +
      '<p>' + data.tastingNotes.eventHost + '</p>' +
      '<p>' + data.tastingNotes.wineName + '</p>' +
      '<p>' + data.tastingNotes.grapePrimary + '</p>' +
      '<p>' + data.tastingNotes.country + '</p>'
    );
}
//
// // this function can stay the same even when we
// // are connecting to real API
// function getAndDisplayTastingDetail() {
//   getTastingDetailData(displayTastingDetail);
// }
// ************************************************************************* //
// TASTINGS DETAIL - END
// ************************************************************************* //



$(function() {
  // getAndDisplayEventsData();
  // getAndDisplayTastingsData();
  // getAndDisplayTastingDetail()

  // get data for events view when events list loads.
  let url = `http://localhost:8080/api/events`;
  let options = {

  };
  getDataFromApi(url, options, renderEventsList);

  // listeners
  $('.events-wrapper').on('click', '.js-event', getTastingsData);

});