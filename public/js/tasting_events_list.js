'use strict';

const TASTING_EVENTS_API_URL = `/api/events/`;
const TASTING_NOTES_API_URL = `/api/tastings/`;
const TASTING_EVENT_EDIT_FORM_URL = '/events/edit';

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

    const mDate = moment(events[i].timestamp).format('MMMM D, YYYY');
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
          <span 
            class="edit-event-span js-edit-event-span"
            data-eventid="${events[i]._id}" 
            >Edit
          </span>
          <span 
            class="delete-event-span js-delete-event-span"
            data-eventid="${events[i]._id}" 
            >Delete
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
  e.stopPropagation();
  const $tastingEventSpan = $(e.target);  // TASTING EVENT span.
  // eventId is used for
  // 1) the "key" for STATE.tastingsFetched.
  // 2) placed on "Add Tasting Note" a tag, which is then extracted and placed in localStorage.
  const eventId = $tastingEventSpan.attr("data-eventid");
  const eventName = $tastingEventSpan.attr("data-eventname");

  if( !STATE.tastingsFetched[eventId] ) {
    // if first time clicking a TASTING EVENT, fetch TASTING NOTE for a particular TASTING EVENT.
    getDataFromApi(`${TASTING_NOTES_API_URL}${eventId}`, {}, renderTastingNotes);
  } else {
    // If TASTING NOTES already been fetched for a particular TASTING EVENT,
    // keep TASTING NOTES in DOM and show/hide on future TASTING EVENT clicks.
    $tastingEventSpan.siblings('ul.js-tastings-ul').toggle();
  }

  function renderTastingNotes(tastings) {
    console.log('tastings = ', tastings);
    // This function is run one time when an initial set of TASTINGS NOTES are fetched.
    // Set tastingsFetched flag, so future clicks on a TASTING EVENT
    // will result in a toggle of DOM tastings notes (and no further fetching of tasting notes).
    STATE.tastingsFetched[eventId] = true;

    for (let i = 0; i < tastings.length ; i++) {
      // Render Tasting Note Header and append DOM.
      $tastingEventSpan.siblings('ul.js-tastings-ul').append(
        `<li class="tasting-li js-tasting-li">
            <!--<span data-eventid="${tastings[i].eventId}" data-tastingid="${tastings[i]._id}" class="tasting-span js-tasting-span">${tastings[i].wineName}</span>-->
            <span class="tasting-span js-tasting-span">${tastings[i].wineName}</span>
            <span 
                class="edit-tasting-span js-edit-tasting-span" 
                data-tastingid="${tastings[i]._id}"
                >Edit
            </span>            
            <span 
                class="delete-tasting-span js-delete-tasting-span" 
                data-tastingid="${tastings[i]._id}"
                >Delete
            </span>
            <div class="tasting-detail-wrapper js-tasting-detail-wrapper">
            
                <div class="country-map-wrapper js-country-map-wrapper">
                  <span class="country-map-span js-country-map-span">
                    Country: ${tastings[i].country}
                  </span>
                  <div class="country-map js-country-map">
                     ${tastings[i].countryMapSrc !== '' ? 
                    `<img class="js-country-map-img" src="${tastings[i].countryMapSrc}">`: 
                    `<div>No Country Map</div>`}
                  </div>
                </div>
                
                <div class="primary-appellation-wrapper js-primary-appellation-wrapper">
                  <span class="primary-appellation-map-span js-primary-appellation-map-span">
                    Primary Appellation: ${tastings[i].primaryAppellation}
                  </span>
                  <div class="primary-appellation-map js-primary-appellation-map">
                    ${tastings[i].primaryAppellationMapSrc !== '' ?
                    `<img class="js-primary-appellation-map-img" src="${tastings[i].primaryAppellationMapSrc}">`:
                    `<div>No Primary Appellation Map</div>`}
                  </div>
                </div>
                
                <div class="secondary-appellation-wrapper js-secondary-appellation-wrapper">
                  <span class="secondary-appellation-map-span js-secondary-appellation-map-span">
                    Secondary Appellation: ${tastings[i].secondaryAppellation}
                  </span>
                  <div class="secondary-appellation-map js-secondary-appellation-map">
                    ${tastings[i].secondaryAppellationMapSrc !== '' ?
                    `<img class="js-secondary-appellation-map-img" src="${tastings[i].secondaryAppellationMapSrc}">`:
                    '<div>No Secondary Appellation Map</div>'}
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
        href="/tastings/new" 
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

const loadEditEventForm = (e) => {
  const $editEventSpan = $(e.target);
  const eventId = $editEventSpan.attr('data-eventid');
  localStorage.setItem('eventId', eventId);
  localStorage.setItem('eventHost', ''); // clear eventHost.
  localStorage.setItem('eventName', ''); // clear eventName.
  window.location = TASTING_EVENT_EDIT_FORM_URL;
};

// ************************************************************************* //
// TOGGLES - BEGIN
// ************************************************************************* //
function toggleTastingNote(e) {
  e.stopPropagation();
  const $countrySpan = $(e.target);
  $countrySpan.siblings('.js-tasting-detail-wrapper').toggle();
}
function toggleCountryMap(e) {
  e.stopPropagation();
  const $countrySpan = $(e.target);
  $countrySpan.siblings('.js-country-map').toggle();
}

function togglePrimaryAppellationMap(e) {
  e.stopPropagation();
  const $appellationSpan = $(e.target);
  $appellationSpan.siblings('.js-primary-appellation-map').toggle();
}

function toggleSecondaryAppellationMap(e) {
  e.stopPropagation();
  const $appellationSpan = $(e.target);
  $appellationSpan.siblings('.js-secondary-appellation-map').toggle();
}
// ************************************************************************* //
// TOGGLES - END
// ************************************************************************* //

// ************************************************************************* //
// SET LOCALSTORAGE - BEGIN
// ************************************************************************* //
function loadNewTastingForm(e) {
  const $linkToNewTastingForm = $(e.target);
  const eventId = $linkToNewTastingForm.attr('data-eventid');
  const eventHost = $linkToNewTastingForm.attr('data-eventhost');
  const eventName = $linkToNewTastingForm.attr('data-eventname');
  localStorage.setItem('eventId', eventId);
  localStorage.setItem('eventHost', eventHost);
  localStorage.setItem('eventName', eventName);
}
// ************************************************************************* //
// SET LOCALSTORAGE - BEGIN
// ************************************************************************* //

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
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-add-new-tasting-note', loadNewTastingForm);
  $tastingEventsAndTastingNotesWrapper.on('click', '.js-edit-event-span', loadEditEventForm);

});