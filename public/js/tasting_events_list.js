'use strict';

// API URL's below used to:
// 1) fetch TASTING EVENTS list:
//    e.g. /api/tasting-events/
// 2) fetch TASTING EVENT's TASTING NOTES list, when a TASTING EVENT list item is clicked:
//    e.g. /api/tasting-events/:eventId
const TASTING_EVENTS_API_URL = `/api/events/`;

// url below used to:
// 1) fetch TASTING NOTE DETAIL when a TASTING NOTE LIST ITEM is clicked:
//    e.g. /api/tasting-note-detail/:tastingId
const TASTING_NOTE_DETAIL_API_URL = `/api/tasting-note-detail/`;

let STATE = {
  tastingsFetched: {
  },
  tastingDetailFetched: {
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
// TASTING EVENTS LIST - BEGIN
// ************************************************************************* //

function renderTastingEventsList(data) {
  for (let i = 0; i < data.events.length ; i++) {
    // populate STATE object "tastingsFetched" object for each TASTING EVENT.
    STATE.tastingsFetched[data.events[i].id] = false;
    //
    // const date = moment(data.events[i].date).format('MMMM Do YYYY, h:mm:ss a');

    // render EVENTS.
    $('.js-events').append(
      `<li class="event js-event">
        <span data-eventid="${data.events[i].id}" class="event-span js-event-span">${data.events[i].date} - ${data.events[i].eventName} - ${data.events[i].eventHost}</span>
        <ul class="tastings js-tastings"></ul>
       </li>`);
  }
}

// ************************************************************************* //
// TASTING EVENTS LIST - END
// ************************************************************************* //

// ************************************************************************* //
// TASTING NOTES LIST - BEGIN
// ************************************************************************* //
function getTastingNotesListData(event) {
  event.stopPropagation();
  const $tastingEventSpan = $(event.target);  // span being clicked on.
  const eventId = $tastingEventSpan.attr("data-eventid"); // parent of clicked span, contains the "eventId"

  if( !STATE.tastingsFetched[eventId] ) {
    // if first time clicking a TASTING EVENT, fetch TASTING NOTE for a particular TASTING EVENT.
    // getDataFromApi(`/api/tasting-events/${eventId}`, {}, renderTastingsList); // working
    getDataFromApi(`${TASTING_EVENTS_API_URL}${eventId}`, {}, renderTastingsList); // what I want.
  } else {
    // If TASTING NOTES already been fetched for a particular TASTING EVENT,
    // keep TASTING NOTES in DOM and show/hide on future TASTING EVENT clicks.
    $tastingEventSpan.siblings('ul.js-tastings').toggle();
  }

  // helper function.
  function renderTastingsList(data) {
    // This function is run one time when an initial set of TASTINGS NOTES are fetched.

    // Set tastingsFetched flag, so future clicks on a TASTING EVENT
    // will result in a toggle of DOM tastings notes (and no further fetching of tasting notes).
    STATE.tastingsFetched[eventId] = true;

    for (let i = 0; i < data.tastings.length ; i++) {
      // populate STATE object "tastingDetailFetched" object for each TASTING NOTE.
      STATE.tastingDetailFetched[data.tastings[i].id] = false;

      // Render Tasting Note Header and append DOM.
      $tastingEventSpan.siblings('ul.js-tastings').append(
        `<li class="tasting js-tasting">
            <span data-tastingid="${data.tastings[i].id}" class="tasting-span js-tasting-span">${data.tastings[i].wineName} - (${data.tastings[i].distributor} -  ${data.tastings[i].date})</span>
            <div class="tasting-detail-wrapper js-tasting-detail-wrapper"></div>
         </li>`);
    }

    // append ADD NEW TASTING NOTE button to DOM
    // $tastingEventSpan.siblings('ul.js-tastings').append(
    //   `<button class="js-add-new-tasting-note">Add Tasting Note</button>`
    // );
    $tastingEventSpan.siblings('ul.js-tastings').append(
      `<a href="/tasting-events/${eventId}/tastings/new" class="add-new-tasting-note">Add Tasting Note</a>`
    );
  }

}
// ************************************************************************* //
// TASTING NOTES LIST - END
// ************************************************************************* //


// ************************************************************************* //
// TASTING NOTE DETAIL - BEGIN
// ************************************************************************* //

function getTastingNotesDetailData(event) {
  event.stopPropagation();
  // NOTE: event.target = span.tasting-span, event.currentTarget = li.js-tasting
  const $tastingSpan = $(event.currentTarget);
  const tastingId = $tastingSpan.attr("data-tastingid");

  if ( !STATE.tastingDetailFetched[tastingId] ) {
    // if first time clicking a TASTINGS NOTE, fetch TASTING DETAIL for a particular TASTING NOTE.
    // getDataFromApi(`/api/tasting-note-detail/${tastingId}`, {}, renderTastingDetail);
    getDataFromApi(`${TASTING_NOTE_DETAIL_API_URL}${tastingId}`, {}, renderTastingDetail);
  } else {
    // If TASTING DETAIL already been fetched for a particular TASTING NOTE,
    // keep TASTING DETAIL in DOM and show/hide on future TASTING NOTE clicks.
    $tastingSpan.siblings('.js-tasting-detail-wrapper').toggle();
  }

  // helper function.
  function renderTastingDetail(data) {
    const { tastingDetail } = data;
    const { pricing } = data.tastingDetail;

    // This function is run one time when TASTING DETAIL of a particular TASTING NOTE is fetched.

    // Set tastingDetailFetched flag, so future clicks on a TASTING NOTE
    // will result in a toggle of DOM TASTING DETAIL (and no further fetching of TASTING DETAIL).
    STATE.tastingDetailFetched[tastingId] = true;

    // render and append DOM.
    $tastingSpan.siblings('.js-tasting-detail-wrapper').append(
    `<div>Date: ${tastingDetail.date}</div>` +
    `<div>Event Host: ${tastingDetail.eventHost}</div>` +
    `<div>Wine: ${tastingDetail.wineName}</div>` +
    `<div>Primary Grape: ${tastingDetail.grapePrimary}</div>` +
    `<div class="country js-country">
        <span class="country-span js-country-span">Country: ${tastingDetail.country}</span>
        <div class="country-map-wrapper js-country-map-wrapper">
            <img class="js-country-map" src="http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-All-wine-map2_1024x1024.jpg?v=1504901393">
        </div>
     </div>` +
    `<div class="appellation-primary js-appellation-primary">
        <span class="appellation-primary-span js-appellation-primary-span">Primary Appellation: ${tastingDetail.appellationPrimary}</span>
        <div class="appellation-primary-map-wrapper js-appellation-map-wrapper">
            <img class="js-appellation-map" src="http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Burgundy-wine-map2.jpg?v=1504901465">
        </div>
     </div>` +
    `<div>Secondary Appellation: ${tastingDetail.appellationSecondary}</div>` +
    `<div>Tertiary Appellation: ${tastingDetail.appellationTertiary}</div>` +
    `<div>Rating: ${tastingDetail.rating}</div>` +
    `<div>${ pricing.pricing1[0] === "n/a" ? `Pricing 1: ${pricing.pricing1[0]}` : `Pricing 1: ${pricing.pricing1[0]} = ${pricing.pricing1[1]}` } </div>` +
    `<div>${ pricing.pricing2[0] === "n/a" ? `Pricing 2: ${pricing.pricing2[0]}` : `Pricing 2: ${pricing.pricing2[0]} = ${pricing.pricing2[1]}` } </div>` +
    `<div>${ pricing.pricing3[0] === "n/a" ? `Pricing 3: ${pricing.pricing3[0]}` : `Pricing 3: ${pricing.pricing3[0]} = ${pricing.pricing3[1]}` } </div>` +
    `<div>${ pricing.pricing4[0] === "n/a" ? `Pricing 4: ${pricing.pricing4[0]}` : `Pricing 4: ${pricing.pricing4[0]} = ${pricing.pricing4[1]}` } </div>` +
    `<div>
        <span>Tasting Notes:</span>
        <div class="tasting-notes">${tastingDetail.tastingNotes}</div>\
     </div>`
    );
  }

}

function toggleCountryMap(event) {
  event.stopPropagation();
  const $countrySpan = $(event.target);
  $countrySpan.siblings('.js-country-map-wrapper').toggle();
}

function toggleAppellationPrimaryMap(event) {
  event.stopPropagation();
  // NOTE: event.target = span.appellation-primary-span, event.currentTarget = div.js-tasting
  const $appellationSpan = $(event.target);
  $appellationSpan.siblings('.js-appellation-map-wrapper').toggle();
}

// ************************************************************************* //
// TASTING NOTE DETAIL - END
// ************************************************************************* //


$(function() {

  // get data for events view when events list loads.
  let options = {};
  getDataFromApi(TASTING_EVENTS_API_URL, options, renderTastingEventsList);

  // listeners
  const $tastingEventsAndTastingNotesWrapper = $('.js-events-wrapper');
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-event-span', getTastingNotesListData);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-tasting-span', getTastingNotesDetailData);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-country-span', toggleCountryMap);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-appellation-primary-span', toggleAppellationPrimaryMap);
});