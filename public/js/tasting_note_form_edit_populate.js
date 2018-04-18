'use strict';

let STATE = {};

// NOTE: localStorage "tastingId" set when User clicks "Edit" tasting note in the
//
// Grab the tastingId from localStorage (set when "Edit" is clicked on Tasting Note).
const tastingId = localStorage.getItem('tastingId');
const TASTING_NOTE_API_URL = `/api/tastings/edit/${tastingId}`;

// ************************************************************************* //
// API GET - BEGIN
// ************************************************************************* //
function getOneTastingFromApi(url, options, callback) {

  const token = localStorage.getItem('token');

  $.ajax({
    url: url,
    type: 'GET',
    headers: {"authorization": token},
    dataType: 'json',
    data: options,
    success: callback,
    error: function() { console.log('something went wrong'); },
  });
}

// ************************************************************************* //
// API GET - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Tasting Form - BEGIN
// ************************************************************************* //
// Populate the Event Edit Form with fetched data.
const populateTastingNoteEditForm = (tastingNote) => {
  console.log('tastingNote = ', tastingNote);

  // populate STATE object.
  const omittedKeys = ['__v'];
  Object.keys(tastingNote).forEach((key) => {
    if ( !omittedKeys.includes(key) ) {
      STATE[key] = tastingNote[key];
    }
  });

  console.log('STATE = ', STATE);
  // NOTE: Legend for Edit Tasting Note Form is set in tasting_note_form.js

  // populate form inputs.
  $('#js-wine-name-input').val(STATE.wineName);
  populateCountrySelect();
  populatePrimaryAppellationSelect();
  populateSecondaryAppellationSelect();
  populatePrimaryGrapeSelect();
  $('#js-tasting-note-ta').val(STATE.tastingNotes);
  popluateRatingSelectInput();
  populatePricing();
};
// ************************************************************************* //
// Populate Tasting Form - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Country Select Input - BEGIN
// ************************************************************************* //
const populateCountrySelect = () => {

  buildCountrySelectInput();

  // populate Country Select Input
  if( STATE.country === 'Not Selected'){
    // do nothing, let Country Select Input default to original state when html loads.
  } else {
    $('#js-country-select').val(STATE.country);
    getCountryMapAndDisplay();
  }
};
// ************************************************************************* //
// Populate Country Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Primary Appellation Select Input - BEGIN
// ************************************************************************* //
const populatePrimaryAppellationSelect = () => {

  if ( STATE.primaryAppellation === 'Not Selected' ) {
    // do nothing, let Primary Appellation Select default to original state when html loads.
  } else {
    buildPrimaryAppellationSelectInput();

    const $primaryAppellationSelctInput = $('#js-primary-appellation-select');
    $primaryAppellationSelctInput.attr({'disabled': false});
    $primaryAppellationSelctInput.val(STATE.primaryAppellation);

    getPrimaryAppellationMapAndDisplay();
  }
};
// ************************************************************************* //
// Populate Primary Appellation Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Secondary Appellation Select Input - BEGIN
// ************************************************************************* //
const populateSecondaryAppellationSelect = () => {

  if ( STATE.secondaryAppellation === 'Not Selected' ) {
    // do nothing, let Secondary Appellation Select Input default to original state when html loads.
  } else {

    buildSecondaryAppellationSelectInput();

    const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');
    $secondaryAppellationSelectInput.attr({'disabled': false});
    $secondaryAppellationSelectInput.val(STATE.secondaryAppellation);

    getSecondaryAppellationMapAndDisplay();
  }
};
// ************************************************************************* //
// Populate Secondary Appellation Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Primary Grape Select Input - BEGIN
// ************************************************************************* //
const populatePrimaryGrapeSelect = () => {

  buildPrimaryGrapesSelectInput();

  if ( STATE.primaryGrape === 'Not Selected' ) {
    // do nothing, let Primary Grape Select Input default to original state when html loads.
  } else {
    const $primaryGrapeSelectInput = $('#js-primary-grape-select');
    $primaryGrapeSelectInput.attr({'disabled': false});
    $primaryGrapeSelectInput.val(STATE.primaryGrape);
  }
};
// ************************************************************************* //
// Populate Primary Grape Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Ratings - BEGIN
// ************************************************************************* //
const popluateRatingSelectInput = () => {

  if ( STATE.rating === 'No Rating Selected' ) {
    // do nothing, let Rating Select Input default to original state when html loads.
  } else {
    const $ratingSelectInput = $('#js-rating-select');
    $ratingSelectInput.attr({'disabled': false});
    $ratingSelectInput.val(STATE.rating);
  }

};
// ************************************************************************* //
// Populate Ratings - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Pricing - BEGIN
// ************************************************************************* //
const populatePricing = () => {
  console.log('tasting_note_form_edit_populate.js populatePricing ran');
  const $price1Select = $('#js-pricing1-select');
  const $price1Input = $('#js-pricing1-input');
  const $price2Select = $('#js-pricing2-select');
  const $price2Input = $('#js-pricing2-input');
  const $price3Select = $('#js-pricing3-select');
  const $price3Input = $('#js-pricing3-input');
  const $price4Select = $('#js-pricing4-select');
  const $price4Input = $('#js-pricing4-input');

  console.log('$price1Input = ', $price1Input);

  const convertCentsToDollars = (cents) => {
    console.log('tasting_note_form_edit_populates.js convertCentsToDollars cents = ', cents);
    return `${ (cents/100).toFixed(2) }`;
  };

  // PRICE 1 - Select
  if ( STATE.pricing1Desc === 'Not Applicable' ) {
    $price1Select.val("Not Applicable");
  } else {
    $price1Select.attr({'disabled': false});
    $price1Select.val( STATE.pricing1Desc);
  }
  // PRICE 1 - Input
  if ( STATE.pricing1Price === 0 ) {
    console.log('tasting_note_form_edit_populate.js populatePricing p1 if');
    $price1Input.attr({'disabled': true});
  } else {
    console.log('tasting_note_form_edit_populate.js populatePricing p1 else');
    $price1Input.attr({'disabled': false});
    $price1Input.val( convertCentsToDollars(STATE.pricing1Price) );
  }

  // PRICE 2 - Select
  if ( STATE.pricing2Desc === 'Not Applicable' ) {
    $price2Select.val("Not Applicable");
  } else {
    $price2Select.attr({'disabled': false});
    $price2Select.val(STATE.pricing2Desc);
  }
  // PRICE 2 - Input
  if ( STATE.pricing2Price === 0 ) {
    $price1Input.attr({'disabled': true});
  } else {
    $price2Input.attr({'disabled': false});
    $price2Input.val( convertCentsToDollars(STATE.pricing2Price) );
  }

  // PRICE 3 - Select
  if ( STATE.pricing3Desc === 'Not Applicable' ) {
    $price3Select.val("Not Applicable");
  } else {
    $price3Select.attr({'disabled': false});
    $price3Select.val(STATE.pricing3Desc);
  }
  // PRICE 3 - Input
  if ( STATE.pricing3Price === 0 ) {
    $price1Input.attr({'disabled': true});
  } else {
    $price3Input.attr({'disabled': false});
    $price3Input.val( convertCentsToDollars(STATE.pricing3Price) );
  }

  // PRICE 4 - Select
  if ( STATE.pricing4Desc === 'Not Applicable' ) {
    $price4Select.val("Not Applicable");
  } else {
    $price4Select.attr({'disabled': false});
    $price4Select.val(STATE.pricing4Desc);
  }
  // PRICE 4 - Input
  if ( STATE.pricing4Price === 0 ) {
    $price1Input.attr({'disabled': true});
  } else {
    $price4Input.attr({'disabled': false});
    $price4Input.val( convertCentsToDollars(STATE.pricing4Price) );
  }

};
// ************************************************************************* //
// Populate Pricing - END
// ************************************************************************* //

$(function() {
  let options = {};
  getOneTastingFromApi(TASTING_NOTE_API_URL, options, populateTastingNoteEditForm);

});