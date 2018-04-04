'use strict';

// API URL's below used to:
// 1) fetch TASTING EVENTS list:
//    e.g. /api/tasting-events/
// 2) fetch TASTING EVENT's TASTING NOTES list, when a TASTING EVENT list item is clicked:
//    e.g. /api/tasting-events/:eventId
const TASTING_EVENTS_API_URL = `/api/events/`;

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

function renderTastingEventsList(events) {
  // console.log('events = ', events);
  for (let i = 0; i < events.length ; i++) {
    // populate STATE object "tastingsFetched" object for each TASTING EVENT.
    STATE.tastingsFetched[events[i]._id] = false;

    // const mDate = moment(events[i].date).format('MMMM Do YYYY, h:mm:ss a');
    // const mDate = moment(events[i].date).format('MMMM D, YYYY');
    const mDate = moment.unix(events[i].timestamp).format('MMM D, YYYY'); // doesnt work
    // const mDate = moment(events[i].timestamp).format('MMM D, YYYY');
    console.log('events[i].timestamp', events[i].timestamp);
    console.log('mDate', mDate);
    // ${mDate} - ${events[i].eventName} - ${events[i].eventHost}
    // render EVENTS.
    $('.js-events-ul').append(
      `<li class="event-li js-event-li">
         <span 
            data-eventid="${events[i]._id}" 
            data-eventhost="${events[i].eventHost}" 
            data-eventname="${events[i].eventName}" 
            class="event-span js-event-span"
            >
            
            ${mDate} - ${events[i].eventName} - ${events[i].eventHost}
          </span>
        <ul class="tastings-ul js-tastings-ul"></ul>
       </li>`);
  }
}

// ************************************************************************* //
// TASTING EVENTS LIST - END
// ************************************************************************* //

// ************************************************************************* //
// TASTING NOTES LIST - BEGIN
// ************************************************************************* //
function getAndDisplayTastingNotes(e) {
  console.log('getAndDisplayTastingNotes ran');
  e.stopPropagation();
  const $tastingEventSpan = $(e.target);  // TASTING EVENT span.
  // eventId is used for
  // 1) the "key" for STATE.tastingsFetched.
  // 2) placed on "Add Tasting Note" a tag, which is then extracted and placed in localStorage.
  const eventId = $tastingEventSpan.attr("data-eventid");
  const eventName = $tastingEventSpan.attr("data-eventname");

  if( !STATE.tastingsFetched[eventId] ) {
    // if first time clicking a TASTING EVENT, fetch TASTING NOTE for a particular TASTING EVENT.
    getDataFromApi(`${TASTING_EVENTS_API_URL}${eventId}`, {}, renderTastingNotes);
  } else {
    // If TASTING NOTES already been fetched for a particular TASTING EVENT,
    // keep TASTING NOTES in DOM and show/hide on future TASTING EVENT clicks.
    $tastingEventSpan.siblings('ul.js-tastings-ul').toggle();
  }

  function renderTastingNotes(tastings) {
    // console.log('tastings = ', tastings);
    // This function is run one time when an initial set of TASTINGS NOTES are fetched.
    // Set tastingsFetched flag, so future clicks on a TASTING EVENT
    // will result in a toggle of DOM tastings notes (and no further fetching of tasting notes).
    STATE.tastingsFetched[eventId] = true;

    for (let i = 0; i < tastings.length ; i++) {

      // TODO - stop/start - write ternary for countryMap
      // Render Tasting Note Header and append DOM.
      $tastingEventSpan.siblings('ul.js-tastings-ul').append(
        `<li class="tasting-li js-tasting-li">
            <!--<span data-eventid="${tastings[i].eventId}" data-tastingid="${tastings[i]._id}" class="tasting-span js-tasting-span">${tastings[i].wineName}</span>-->
            <span class="tasting-span js-tasting-span">${tastings[i].wineName}</span>
            <span class="delete-tasting-note js-delete-tasting-note" data-tastingid="${tastings[i]._id}">Delete</span>
            <div class="tasting-detail-wrapper js-tasting-detail-wrapper">
                <div class="country-map-wrapper js-country-map-wrapper">
                  <span class="country-map-span js-country-map-span">Country: ${tastings[i].country}</span>
                  <div class="country-map js-country-map">
                      <img class="js-country-map-img" src="${tastings[i].countryMapSrc}">
                  </div>
                </div>
                <div class="primary-appellation-wrapper js-primary-appellation-wrapper">
                  <span class="primary-appellation-map-span js-primary-appellation-map-span">Primary Appellation: ${tastings[i].primaryAppellation}</span>
                  <div class="primary-appellation-map js-primary-appellation-map">
                      <img class="js-primary-appellation-map-img" src="${tastings[i].primaryAppellationMapSrc}">
                  </div>
                </div>
                <div class="secondary-appellation-wrapper js-secondary-appellation-wrapper">
                  <span class="secondary-appellation-map-span js-secondary-appellation-map-span">Secondary Appellation: ${tastings[i].secondaryAppellation}</span>
                  <div class="secondary-appellation-map js-secondary-appellation-map">
                      <img class="js-secondary-appellation-map-img" src="${tastings[i].secondaryAppellationMapSrc}">
                  </div>
                </div>
                <div>Primary Grape: ${tastings[i].grapePrimary}</div>
                <div>Rating: ${tastings[i].rating}</div>
                <div>
                    Pricing 1: ${tastings[i].pricing1Desc} - ${tastings[i].pricing1Price}
                </div>
                <div>
                    Pricing 2: ${tastings[i].pricing2Desc} - ${tastings[i].pricing2Price}
                </div>
                <div>
                    Pricing 3: ${tastings[i].pricing3Desc} - ${tastings[i].pricing3Price}
                </div>       
                <div>
                    Pricing 4: ${tastings[i].pricing4Desc} - ${tastings[i].pricing4Price}
                </div>                         
                <div>
                  <span>Tasting Notes:</span>
                  <div class="tasting-notes">${tastings[i].tastingNotes}</div>
                </div>
            </div>
         </li>`);
    }

    // append ADD NEW TASTING NOTE button to DOM
    // $tastingEventSpan.siblings('ul.js-tastings-ul').append(
    //   `<button class="js-add-new-tasting-note">Add Tasting Note</button>`
    // );
    $tastingEventSpan.siblings('ul.js-tastings-ul').append(
      `<a 
        href="/events/${eventId}/tastings/new" 
        class="add-new-tasting-note js-add-new-tasting-note" 
        data-eventid="${eventId}"
        data-eventname="${eventName}"
        >
        Add Tasting Note
      </a>`
    );
  }

}
// ************************************************************************* //
// TASTING NOTES LIST - END
// ************************************************************************* //


// // ************************************************************************* //
// // TASTING NOTE DETAIL - BEGIN
// // ************************************************************************* //
//
// function getTastingNotesDetailData(e) {
//   e.stopPropagation();
//   // NOTE: event.target = span.tasting-span, event.currentTarget = li.js-tasting
//   const $tastingSpan = $(e.currentTarget);
//   const tastingId = $tastingSpan.attr("data-tastingid");
//
//   // const eventId = $tastingSpan.attr("data-eventid");
//   const eventId = "1000";
//
//   if ( !STATE.tastingDetailFetched[tastingId] ) {
//     // if first time clicking a TASTINGS NOTE, fetch TASTING DETAIL for a particular TASTING NOTE.
//     // getDataFromApi(`/api/tasting-note-detail/${tastingId}`, {}, renderTastingDetail);
//     getDataFromApi(`${TASTING_EVENTS_API_URL}${eventId}/tastings/${tastingId}`, {}, renderTastingDetail);
//   } else {
//     // If TASTING DETAIL already been fetched for a particular TASTING NOTE,
//     // keep TASTING DETAIL in DOM and show/hide on future TASTING NOTE clicks.
//     $tastingSpan.siblings('.js-tasting-detail-wrapper').toggle();
//   }
//
//   // helper function.
//   function renderTastingDetail(data) {
//     const { tastingDetail } = data;
//     const { pricing } = data.tastingDetail;
//
//     // This function is run one time when TASTING DETAIL of a particular TASTING NOTE is fetched.
//
//     // Set tastingDetailFetched flag, so future clicks on a TASTING NOTE
//     // will result in a toggle of DOM TASTING DETAIL (and no further fetching of TASTING DETAIL).
//     STATE.tastingDetailFetched[tastingId] = true;
//
//     // render and append DOM.
//     $tastingSpan.siblings('.js-tasting-detail-wrapper').append(
//     `<div>Date: ${tastingDetail.date}</div>` +
//     `<div>Event Host: ${tastingDetail.eventHost}</div>` +
//     `<div>Wine: ${tastingDetail.wineName}</div>` +
//     `<div>Primary Grape: ${tastingDetail.grapePrimary}</div>` +
//     `<div class="country-map-wrapper js-country-map-wrapper">
//         <span class="country-map-span js-country-map-span">Country: ${tastingDetail.country}</span>
//         <div class="country-map js-country-map">
//             <img class="js-country-map-img" src="http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-All-wine-map2_1024x1024.jpg?v=1504901393">
//         </div>
//      </div>` +
//     `<div class="primary-appellation-wrapper js-primary-appellation-wrapper">
//         <span class="primary-appellation-map-span js-primary-appellation-map-span">Primary Appellation: ${tastingDetail.appellationPrimary}</span>
//         <div class="primary-appellation-map js-primary-appellation-map">
//             <img class="js-primary-appellation-map-img" src="http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Burgundy-wine-map2.jpg?v=1504901465">
//         </div>
//      </div>` +
//     `<div>Secondary Appellation: ${tastingDetail.appellationSecondary}</div>` +
//     `<div>Tertiary Appellation: ${tastingDetail.appellationTertiary}</div>` +
//     `<div>Rating: ${tastingDetail.rating}</div>` +
//     `<div>${ pricing.pricing1[0] === "n/a" ? `Pricing 1: ${pricing.pricing1[0]}` : `Pricing 1: ${pricing.pricing1[0]} = ${pricing.pricing1[1]}` } </div>` +
//     `<div>${ pricing.pricing2[0] === "n/a" ? `Pricing 2: ${pricing.pricing2[0]}` : `Pricing 2: ${pricing.pricing2[0]} = ${pricing.pricing2[1]}` } </div>` +
//     `<div>${ pricing.pricing3[0] === "n/a" ? `Pricing 3: ${pricing.pricing3[0]}` : `Pricing 3: ${pricing.pricing3[0]} = ${pricing.pricing3[1]}` } </div>` +
//     `<div>${ pricing.pricing4[0] === "n/a" ? `Pricing 4: ${pricing.pricing4[0]}` : `Pricing 4: ${pricing.pricing4[0]} = ${pricing.pricing4[1]}` } </div>` +
//     `<div>
//         <span>Tasting Notes:</span>
//         <div class="tasting-notes">${tastingDetail.tastingNotes}</div>
//      </div>`
//     );
//   }
//
// }
//
//
//
// // ************************************************************************* //
// // TASTING NOTE DETAIL - END
// // ************************************************************************* //
function toggleTastingNote(e) {
  console.log('toggleTastingNote ran');
  e.stopPropagation();
  const $countrySpan = $(e.target);
  $countrySpan.siblings('.js-tasting-detail-wrapper').toggle();
}
function toggleCountryMap(e) {
  console.log('toggleCountryMap ran');
  e.stopPropagation();
  const $countrySpan = $(e.target);
  $countrySpan.siblings('.js-country-map').toggle();
}

function togglePrimaryAppellationMap(e) {
  console.log('togglePrimaryAppellationMap ran');
  e.stopPropagation();
  const $appellationSpan = $(e.target);
  $appellationSpan.siblings('.js-primary-appellation-map').toggle();
}

function toggleSecondaryAppellationMap(e) {
  console.log('toggleSecondaryAppellationMap ran');
  e.stopPropagation();
  const $appellationSpan = $(e.target);
  $appellationSpan.siblings('.js-secondary-appellation-map').toggle();
}

function setLocalStorage(e) {
  const $linkToNewTastingForm = $(e.target);
  const eventId = $linkToNewTastingForm.attr('data-eventid');
  const eventHost = $linkToNewTastingForm.attr('data-eventhost');
  const eventName = $linkToNewTastingForm.attr('data-eventname');
  localStorage.setItem('eventId', eventId);
  localStorage.setItem('eventHost', eventHost);
  localStorage.setItem('eventName', eventName);
}

$(function() {

  // get data for events view when events list loads.
  let options = {};
  getDataFromApi(TASTING_EVENTS_API_URL, options, renderTastingEventsList);

  // listeners
  const $tastingEventsAndTastingNotesWrapper = $('.js-events-list-wrapper');
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-event-span', getAndDisplayTastingNotes);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-tasting-span', toggleTastingNote);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-country-map-span', toggleCountryMap);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-primary-appellation-map-span', togglePrimaryAppellationMap);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-secondary-appellation-map-span', toggleSecondaryAppellationMap);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-add-new-tasting-note', setLocalStorage);

});