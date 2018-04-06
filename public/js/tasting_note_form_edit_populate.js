'use strict';

let STATE = {};

// Grab the tastingId from localStorage (set when "Edit" is clicked on Tasting Note).
const tastingId = localStorage.getItem('tastingId');
console.log('tastingId', tastingId);
const TASTING_NOTE_API_URL = `/api/tastings/edit/${tastingId}`;

// ************************************************************************* //
// API GET - BEGIN
// ************************************************************************* //
function getOneTastingFromApi(url, options, callback) {
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
// API GET - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Tasting Form - BEGIN
// ************************************************************************* //
// Populate the Event Edit Form with fetched data.
const populateTastingNoteEditForm = (tastingNote) => {

  // populate STATE object.
  const omittedKeys = ['__v'];
  Object.keys(tastingNote).forEach((key) => {
    if ( !omittedKeys.includes(key) ) {
      STATE[key] = tastingNote[key];
    }
  });

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

  if ( STATE.pricing1Desc === 'No Price 1 Selected' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price1Select = $('#js-pricing1-select');
    $price1Select.attr({'disabled': false});
    $price1Select.val(STATE.pricing1Desc);
  }
  if ( STATE.pricing1Price === 'No Price Entered' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price1Input = $('#js-pricing1-input');
    $price1Input.attr({'disabled': false});
    $price1Input.val(STATE.pricing1Price);
  }

  if ( STATE.pricing2Desc === 'No Price 2 Selected' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price2Select = $('#js-pricing2-select');
    $price2Select.attr({'disabled': false});
    $price2Select.val(STATE.pricing2Desc);
  }
  if ( STATE.pricing2Price === 'No Price Entered' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price2Input = $('#js-pricing2-input');
    $price2Input.attr({'disabled': false});
    $price2Input.val(STATE.pricing2Price);
  }

  if ( STATE.pricing3Desc === 'No Price 3 Selected' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price3Select = $('#js-pricing3-select');
    $price3Select.attr({'disabled': false});
    $price3Select.val(STATE.pricing3Desc);
  }
  if ( STATE.pricing3Price === 'No Price Entered' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price3Input = $('#js-pricing3-input');
    $price3Input.attr({'disabled': false});
    $price3Input.val(STATE.pricing3Price);
  }

  if ( STATE.pricing4Desc === 'No Price 4 Selected' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price4Select = $('#js-pricing4-select');
    $price4Select.attr({'disabled': false});
    $price4Select.val(STATE.pricing4Desc);
  }
  if ( STATE.pricing4Price === 'No Price Entered' ) {
    // do nothing, let Pricing Selects / Inputs default to original state when html loads.
  } else {
    const $price4Input = $('#js-pricing4-input');
    $price4Input.attr({'disabled': false});
    $price4Input.val(STATE.pricing4Price);
  }

};
// ************************************************************************* //
// Populate Pricing - END
// ************************************************************************* //

$(function() {
  let options = {};
  getOneTastingFromApi(TASTING_NOTE_API_URL, options, populateTastingNoteEditForm);

});