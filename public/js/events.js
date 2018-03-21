'use strict';

let STATE = {
  tastingsFetched: {
    "1": false,
    "2": false
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
// EVENTS LIST - BEGIN
// ************************************************************************* //

function renderEventsList(data) {
  for (let i = 0; i < data.events.length ; i++) {
    // populate STATE object "tastingsFetched" object for each TASTING EVENT.
    STATE.tastingsFetched[data.events[i].id] = false;
    //
    // const date = moment(data.events[i].date).format('MMMM Do YYYY, h:mm:ss a');

    // render EVENTS.
    $('.js-events').append(
      `<li class="event js-event" data-eventid="${data.events[i].id}">
        <span class="event-span">${data.events[i].date} - ${data.events[i].eventName} - ${data.events[i].eventHost}</span>
        <ul class="tastings js-tastings"></ul>
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
  event.stopPropagation();
  // NOTE: event.target = span.event-span, event.currentTarget = li.js-event
  const $tastingEvent = $(event.currentTarget);
  const eventId = $tastingEvent.attr("data-eventid");

  // helper function.
  function renderTastingsList(data) {
    for (let i = 0; i < data.tastings.length ; i++) {
      // populate STATE object "tastingDetailFetched" object for each TASTING.
      STATE.tastingDetailFetched[data.tastings[i].id] = false;

      // display tastings list.
      $tastingEvent.find('ul.js-tastings').append(
        `<li class="tasting js-tasting" data-tastingid="${data.tastings[i].id}">
            <span class="tasting-span">${data.tastings[i].wineName} - (${data.tastings[i].distributor} -  ${data.tastings[i].date})</span>
            <div class="tasting-detail-wrapper js-tasting-detail-wrapper"></div>
         </li>`);
    }
  }

  if( !STATE.tastingsFetched[eventId] ) {
    // Fetch TASTINGS data once, set flag to false to prevent subsequent fetches.
    STATE.tastingsFetched[eventId] = true;
    getDataFromApi(`/api/events/${eventId}`, {}, renderTastingsList);
  } else {
    $tastingEvent.find('ul.js-tastings').toggle();
  }
}
// ************************************************************************* //
// TASTINGS LIST - END
// ************************************************************************* //


// ************************************************************************* //
// TASTINGS DETAIL - BEGIN
// ************************************************************************* //

function getTastingDetailData(event) {
  event.stopPropagation();
  // NOTE: event.target = span.tasting-span, event.currentTarget = li.js-tasting
  const $tasting = $(event.currentTarget);
  const tastingId = $tasting.attr("data-tastingid");

  // helper function.
  function renderTastingDetail(data) {
    const { tastingDetail } = data;
    const { pricing } = data.tastingDetail;
    console.log('pricing = ', pricing);

    $tasting.find('.js-tasting-detail-wrapper').append(
    `<div>Date: ${tastingDetail.date}</div>` +
    `<div>Event Host: ${tastingDetail.eventHost}</div>` +
    `<div>Wine: ${tastingDetail.wineName}</div>` +
    `<div>Primary Grape: ${tastingDetail.grapePrimary}</div>` +
    `<div class="country js-country">
        <span class="country-span">Country: ${tastingDetail.country}</span>
        <div class="country-map-wrapper js-country-map-wrapper">
            <img class="js-country-map" src="http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-All-wine-map2_1024x1024.jpg?v=1504901393">
        </div>
     </div>` +
    `<div class="appellation-primary js-appellation-primary">
        <span class="appellation-primary-span">Primary Appellation: ${tastingDetail.appellationPrimary}</span>
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

  if ( !STATE.tastingDetailFetched[tastingId] ) {
    STATE.tastingDetailFetched[tastingId] = true;
    getDataFromApi(`/api/tastings/${tastingId}`, {}, renderTastingDetail);
  } else {
    $tasting.find('.js-tasting-detail-wrapper').toggle();
  }
}
function toggleCountryMap(event) {
  event.stopPropagation();
  // NOTE: event.target = span.country-span, event.currentTarget = div.js-tasting
  const $country = $(event.currentTarget);
  $country.find('.js-country-map-wrapper').toggle();
}

function toggleAppellationPrimaryMap(event) {
  event.stopPropagation();
  // NOTE: event.target = span.appellation-primary-span, event.currentTarget = div.js-tasting
  const $appellation = $(event.currentTarget);
  $appellation.find('.js-appellation-map-wrapper').toggle();
}

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
  const $eventsWrapper = $('.js-events-wrapper');
  $eventsWrapper.on('click', '.js-event', getTastingsData);
  $eventsWrapper.on('click', '.js-tasting', getTastingDetailData);
  $eventsWrapper.on('click', '.js-country', toggleCountryMap);
  $eventsWrapper.on('click', '.js-appellation-primary', toggleAppellationPrimaryMap);
});