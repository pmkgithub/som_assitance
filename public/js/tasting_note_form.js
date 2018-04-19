'use strict';

// ************************************************************************* //
// HELPERS - BEGIN
// ************************************************************************* //
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// ************************************************************************* //
// HELPERS - END
// ************************************************************************* //

// ************************************************************************* //
// SET LEGEND - BEGIN
// ************************************************************************* //
const buildLegend = () => {
  $('.js-legend').html(`Tasting Note for ${localStorage.getItem('eventName')} Event`);
}
// ************************************************************************* //
// SET LEGEND - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Country Selection - BEGIN
// ************************************************************************* //
const handleCountrySelection = () => {
  getCountryMapAndDisplay();
  buildPrimaryAppellationSelectInput();
  buildPrimaryGrapesSelectInput();
};
// ************************************************************************* //
// Handle Country Selection - END
// ************************************************************************* //


// ************************************************************************* //
// Country Select Input - BEGIN
// ************************************************************************* //
const getCountries = () => {
  let countries = [];

  Object.keys(COUNTRIES).forEach((country) => {
    countries.push(COUNTRIES[country]);
  });
  countries.sort();
  countries.push("Other");
  countries.push("Don't Know");
  return countries;
};

const buildCountrySelectInput = () => {
  let html = `<option value="" disabled selected>Select a country</option>`;
  const $countySelectInput = $('#js-country-select');

  getCountries().forEach((country) => {
    html += `<option value="${country}">${country}</option>`;
  });

  $countySelectInput.append(html);
};
// ************************************************************************* //
// Country Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Country Map - BEGIN
// ************************************************************************* //
const getCountryMapAndDisplay = () => {
  const $countrySelectInput = $('#js-country-select');
  const $countryMapWrapper = $('.js-country-map-wrapper');
  const countryWithCapitalLetters = $countrySelectInput.val();
  const countryKey = $countrySelectInput.val().toLowerCase().split(' ').join('_');
  let html = '';


  if ( !APPS[countryKey] ) {
    // handles "Other", "Don't Know", or bogus country.
    html = `No Country Map for ${countryWithCapitalLetters}`;
    $countryMapWrapper.html(html);
    $countryMapWrapper.show();
    return false;
  }

  if ( !APPS[countryKey].map ) {
    // handles countries that exist which don't have country maps.
    html = `No Country Map for ${countryWithCapitalLetters}`;
  } else {
    // country exists in data object, and it has a map.
    html = `<div class="country-map js-country-map">
              <span class="country-map-span js-country-map-span">Show/Hide Country Map</span>
              <img class="country-map-img js-country-map-img" src="${APPS[countryKey].map}">
            </div>`;
  }

  $countryMapWrapper.html(html);
  $countryMapWrapper.show();

};

const toggleCountryMap = (e) => {
  e.stopPropagation();
  const $countryMapSpan = $(e.target);
  $countryMapSpan.siblings('.js-country-map-img').toggle();
};
// ************************************************************************* //
// Country Map - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Primary Appellation Selection - BEGIN
// ************************************************************************* //

const handlePrimaryAppellationSelection = () =>{
  getPrimaryAppellationMapAndDisplay();
  buildSecondaryAppellationSelectInput();

};
// ************************************************************************* //
// Handle Primary Appellation Selection - END
// ************************************************************************* //

// ************************************************************************* //
// Primary Appellation Select Input - BEGIN
// ************************************************************************* //
const getPrimaryAppellations = () => {
  let primaryAppellations = [];
  const $countySelectInput = $('#js-country-select');
  const countryWithCapitalLetters = $countySelectInput.val();
  const countryKey = $countySelectInput.val().toLowerCase().split(' ').join('_');
  const $primaryAppellationSelectInput = $('#js-primary-appellation-select');
  const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');

  // reset Appellation Selcet Inputs.
  resetPrimaryAppellationLabel();
  $primaryAppellationSelectInput.empty();
  $primaryAppellationSelectInput.attr({'disabled': true});
  $('.js-primary-app-map-wrapper').hide();

  resetSecondaryAppellationLabel();
  $secondaryAppellationSelectInput.empty();
  $secondaryAppellationSelectInput.attr({'disabled': true});
  $('.js-secondary-app-map-wrapper').hide();

  if ( !APPS[countryKey] ) {
    // handles "Other", "Don't Know" or bogus country.
    setNoPrimaryAppellationLabel(countryWithCapitalLetters);
    setNoSecondaryAppellationLabel(countryWithCapitalLetters);
    return false;
  }
  if ( !APPS[countryKey].primary_appellations ) {
    // handles case when there is no PRIMARY APPELLATIONS for a country.
    setNoPrimaryAppellationLabel(countryWithCapitalLetters);
    setNoSecondaryAppellationLabel(countryWithCapitalLetters);

  } else {

    Object.values(APPS[countryKey].primary_appellations).forEach((appellation) => {
      primaryAppellations.push(appellation.name);
    });
    primaryAppellations.sort();
    primaryAppellations.push("Other");
    primaryAppellations.push("Don't Know");

    setPrimaryAppellationLabel(countryWithCapitalLetters);
    return primaryAppellations;
  }
};

const buildPrimaryAppellationSelectInput = () => {
  const $primaryAppellationSelectInput = $('#js-primary-appellation-select');
  const appellations = getPrimaryAppellations();

  if ( appellations ) {
    let html = `<option value="" disabled selected>Select a Primary Appellation</option>`;
    appellations.forEach((appellation) => {
      html += `<option value="${appellation}">${appellation}</option>`;
    });
    $primaryAppellationSelectInput.removeAttr('disabled');
    $primaryAppellationSelectInput.html(html);
  }

};
// ************************************************************************* //
// Primary Appellation Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Primary Appellation Map - BEGIN
// ************************************************************************* //
const getPrimaryAppellationMapAndDisplay = () => {
  // Country
  const $countrySelectInput = $('#js-country-select');
  const countryKey = $countrySelectInput.val().toLowerCase().split(' ').join('_');
  // Primary Appellation
  const $primAppSelectInput = $('#js-primary-appellation-select');
  const $primAppMapWrapper = $('.js-primary-app-map-wrapper');
  const primAppWithCapitalLetters = $primAppSelectInput.val();
  const primAppKey = $primAppSelectInput.val().toLowerCase().split(' ').join('_');
  let html = '';

  if ( !APPS[countryKey] ) {
    // handles "Other", "Don't Know", or bogus country.
    // This is extra error handling.
    // Error handling already handled in getCountryMapAndDisplay().
    return false;
  }

  if ( !APPS[countryKey].primary_appellations ) {
    // handles countries that exist but don't have Primary Appellations.
    // This is extra error handling.
    // Error handling already handled in getPrimaryAppellations().
    return false;
  }

  if (!APPS[countryKey].primary_appellations[primAppKey]) {
    // handles "Other", "Don't Know", bogus Primary Appellations.
    html = `No Primary Appellation Map for ${primAppWithCapitalLetters}`;
    $primAppMapWrapper.html(html);
    $primAppMapWrapper.show();
    return false;
  }

  if (!APPS[countryKey].primary_appellations[primAppKey].map) {
    // handles Primary Appellations that exist, but don't have maps.
    html = `No Primary Map for ${primAppWithCapitalLetters}`;
    $primAppMapWrapper.html(html);
    $primAppMapWrapper.show();
  } else {
    // country exists in data object, and it has a map.
    html = `<div class="primary-app-map js-primary-app-map">
              <span class="primary-app-map-span js-primary-app-map-span">Show/Hide Primary Appellation Map for ${primAppWithCapitalLetters}</span>
              <img class="primary-app-map-img js-primary-app-map-img" src="${APPS[countryKey].primary_appellations[primAppKey].map}">
            </div>`;
    $primAppMapWrapper.html(html);
    $primAppMapWrapper.show();
  }

};

const togglePrimAppMap = (e) => {
  e.stopPropagation();
  const $primAppMapSpan = $(e.target);
  $primAppMapSpan.siblings('.js-primary-app-map-img').toggle();
};
// ************************************************************************* //
// Primary Appellation Map - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Primary Appellation Selection - BEGIN
// ************************************************************************* //
const handleSecondaryAppellationSelection = () =>{
  getSecondaryAppellationMapAndDisplay();
  // buildTertiaryAppellationSelectInput(); // stub for future code.
};
// ************************************************************************* //
// Handle Primary Appellation Selection - END
// ************************************************************************* //

// ************************************************************************* //
// Secondary Appellation Select Input - BEGIN
// ************************************************************************* //
const getSecondaryAppellations = () => {
  let secondaryAppellations = [];
  const $countySelectInput = $('#js-country-select');
  const countryKey = $countySelectInput.val().toLowerCase().split(' ').join('_');
  const $primaryAppellationSelectInput = $('#js-primary-appellation-select');
  const primAppWithCapitalLetters = $primaryAppellationSelectInput.val();
  const primAppKey = $primaryAppellationSelectInput.val().toLowerCase().split(' ').join('_');
  const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');
  let secAppsObj;

  if ( !APPS[countryKey].primary_appellations[primAppKey]) {
    // handles "Other", "Don't Know" or bogus Primary Appellation
    // "countryKey" already handled in getPrimaryAppellations().
    setNoSecondaryAppellationLabel(primAppWithCapitalLetters); // TODO - is this needed? Remove if not needed.
    return false;
  }

  if ( !APPS[countryKey].primary_appellations[primAppKey].secondary_appellations ) {
    // Secondary Appellations don't exist.
    setNoSecondaryAppellationLabel(primAppWithCapitalLetters);
    $secondaryAppellationSelectInput.empty();
    $secondaryAppellationSelectInput.attr({'disabled': true});
    $('.js-secondary-app-map-wrapper').hide();


  } else {
    // Secondary Appellations exist.
    secAppsObj = APPS[countryKey].primary_appellations[primAppKey].secondary_appellations;
    Object.values(secAppsObj).forEach((secApp) => {
      secondaryAppellations.push(secApp.name);
    });

    secondaryAppellations.sort();
    secondaryAppellations.push("Other");
    secondaryAppellations.push("Don't Know");
    setSecondaryAppellationLabel(primAppWithCapitalLetters);

    return secondaryAppellations;
  }

};

const buildSecondaryAppellationSelectInput = () => {
  const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');
  const appellations = getSecondaryAppellations();

  $secondaryAppellationSelectInput.empty();

  if ( !appellations ) {
    // no Secondary Appellations also handled
    // do nothing.
  } else {

    let html = `<option value="" disabled selected>Select a Secondary Appellation</option>`;
    appellations.forEach((appellation) => {
      html += `<option value="${appellation}">${appellation}</option>`;
    });
    $secondaryAppellationSelectInput.removeAttr('disabled');
    $secondaryAppellationSelectInput.html(html);
  }
};
// ************************************************************************* //
// Secondary Appellation Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Secondary Appellation Map - BEGIN
// ************************************************************************* //
const getSecondaryAppellationMapAndDisplay = () => {
  // Country
  const $countrySelectInput = $('#js-country-select');
  const countryKey = $countrySelectInput.val().toLowerCase().split(' ').join('_');

  // Primary Appellation
  const $primAppSelectInput = $('#js-primary-appellation-select');
  // const $primAppMapWrapper = $('.js-primary-app-map-wrapper');
  // const primAppWithCapitalLetters = $primAppSelectInput.val();
  const primAppKey = $primAppSelectInput.val().toLowerCase().split(' ').join('_');

  // Secondary Appellation.
  const $secAppSelectInput = $('#js-secondary-appellation-select');
  const $secAppMapWrapper = $('.js-secondary-app-map-wrapper');
  const secAppWithCapitalLetters = $secAppSelectInput.val();
  const secAppKey = $secAppSelectInput.val().toLowerCase().split(' ').join('_');
  let html = '';

  if ( !APPS[countryKey] ) {
    // handles "Other", "Don't Know", or bogus country.
    // This is extra error handling.
    // Error handling already handled in getCountryMapAndDisplay().
    return false;
  }

  if ( !APPS[countryKey].primary_appellations ) {
    // handles countries that exist but don't have Primary Appellations.
    // This is extra error handling.
    // Error handling already handled in getPrimaryAppellations().
    return false;
  }

  if (!APPS[countryKey].primary_appellations[primAppKey]) {
    // handles "Other", "Don't Know", bogus Primary Appellations.
    return false;
  }
  if ( !APPS[countryKey].primary_appellations[primAppKey].secondary_appellations ) {
    // handles Primary Appellations that exist, but don't have Secondary Appellations.
    return false;
  }

  if ( !APPS[countryKey].primary_appellations[primAppKey].secondary_appellations[secAppKey] ) {
    // handles "Other", "Don't Know", or bogus Secondary Appellations.
    html = `No Secondary Appellation Map for ${secAppWithCapitalLetters}`;
    $secAppMapWrapper.html(html);
    $secAppMapWrapper.show();
    return false;
  }

  if (!APPS[countryKey].primary_appellations[primAppKey].secondary_appellations[secAppKey].map) {
    // handles Secondary Appellations that exist, but don't have maps.
    html = `No Secondary Appellation Map for ${secAppWithCapitalLetters}`;
    $secAppMapWrapper.html(html);
    $secAppMapWrapper.show();
  } else {
    // country exists in data object, and it has a map.
    html = `<div class="secondary-app-map js-secondary-app-map">
              <span class="secondary-app-map-span js-secondary-app-map-span">Show/Hide Secondary Appellation Map for ${secAppWithCapitalLetters}</span>
              <img class="secondary-app-map-img js-secondary-app-map-img" src="${APPS[countryKey].primary_appellations[primAppKey].secondary_appellations[secAppKey].map}">
            </div>`;
    $secAppMapWrapper.html(html);
    $secAppMapWrapper.show();
    return false;
  }

};

const toggleSecAppMap = (e) => {
  e.stopPropagation();
  const $secAppMapSpan = $(e.target);
  $secAppMapSpan.siblings('.js-secondary-app-map-img').toggle();
};
// ************************************************************************* //
// Secondary Appellation Map - END
// // ************************************************************************* //

// ************************************************************************* //
// Appellation Labels/Map Text - BEGIN
// ************************************************************************* //
// helper functions for Primary Appellation Select Input Section.
// Primary App Texts
const resetPrimaryAppellationLabel = () => {
  const text = `Primary Appellation`;
  $("label[for='js-primary-appellation-select']").html(text);
};
const setPrimaryAppellationLabel = (location) => {
  let text = `Primary Appellations for ${location}`;
  $("label[for='js-primary-appellation-select']").html(text);
};
const setNoPrimaryAppellationLabel = (location) => {
  const text = `Currently no Primary Appellation Information for ${location}`;
  $("label[for='js-primary-appellation-select']").html(text);
};
const setNoPrimaryAppellationsMapText = (location) => {
  const text = `Currently no Primary Appellation Maps for ${location}`;
  $('.js-primary-app-map-wrapper').html(text);
};
// Secondary App Texts
const resetSecondaryAppellationLabel = () => {
  const text = `Secondary Appellation (disabled until Primary Appellation selected)`;
  $("label[for='js-secondary-appellation-select']").html(text);
};
const setSecondaryAppellationLabel = (location) => {
  let text = `Secondary Appellations for ${location}`;
  $("label[for='js-secondary-appellation-select']").html(text);
};
const setNoSecondaryAppellationLabel = (location) => {
  const text = `Currently no Secondary Appellation Information for ${location}`;
  $("label[for='js-secondary-appellation-select']").html(text);
};
const setNoSecondaryAppellationsMapText = (location) => {
  const text = `Currently no Secondary Appellation Maps for ${location}`;
  $('.js-secondary-app-map-wrapper').html(text);
};
// ************************************************************************* //
// Appellation Labels/Map Text - END
// ************************************************************************* //

// ************************************************************************* //
// Primary Grape Select Input - BEGIN
// ************************************************************************* //
const getGrapesByCountry = (country) => {
  // if a country name is supplied, return a list of grapes that only
  // grow in that country.
  // if "Don't Know" is supplied as the country name, return a list of
  // all grapes.
  let grapes = [];

  if ( country === "Don't Know" || country === "Other") {
    // get all grapes.
    Object.keys(PRIMARY_GRAPES).forEach((grape) => {
      grapes.push(PRIMARY_GRAPES[grape].grapeName);
    });
  } else {
    // only get grapes that grow in a particular country.
    Object.keys(PRIMARY_GRAPES).forEach((grape) => {
      if (PRIMARY_GRAPES[grape].countries.includes(country) ) {
        grapes.push(PRIMARY_GRAPES[grape].grapeName);

      }
    });
  }
  grapes.sort();
  grapes.push("Other");
  grapes.push("Don't Know");
  return grapes;

};

const buildPrimaryGrapesSelectInput = () => {
  const $countrySelectInput = $('#js-country-select');
  const $primaryGrapeSelectInput = $('#js-primary-grape-select');
  const country = $countrySelectInput.val();
  const primaryGrapes = getGrapesByCountry(country);
  let html = `<option value="" disabled selected>Select a Primary Grape</option>`;

  $primaryGrapeSelectInput.empty();
  $primaryGrapeSelectInput.removeAttr('disabled');
  primaryGrapes.forEach((grape) => {
    html += `<option value="${grape}">${grape}</option>`;
  });
  $primaryGrapeSelectInput.append(html);
};

const addWineTypeText = () => {
  const $primaryGrapeLabel = $("label[for='js-primary-grape-select']");
  const $primaryGrapeSelectInput = $('#js-primary-grape-select');
  const selectedGrape = $primaryGrapeSelectInput.val();
  let wineType = '';
  let html = '';

  Object.keys(PRIMARY_GRAPES).forEach((grape) => {
    if ( PRIMARY_GRAPES[grape].grapeName === selectedGrape ) {
      wineType = PRIMARY_GRAPES[grape].wineType;
    }
  });

  if ( selectedGrape === "Other" || selectedGrape === "Don't Know") {
    html = `Primary Grape:`
  } else if ( wineType === 'Sparkling Wine' || wineType === 'Dessert Wine') {
    html = `Primary Grape: ${selectedGrape} is a  ${wineType} style`;
  } else if ( selectedGrape.includes('Blend')) {
    html = `Primary Grape: ${selectedGrape} is a  ${wineType} Blend`;
  } else {
    html = `Primary Grape: ${selectedGrape} is a  ${wineType} grape`;
  }

  $primaryGrapeLabel.html(html);

};
// ************************************************************************* //
// Primary Grape Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// Pricing Select Inputs - BEGIN
// ************************************************************************* //
const handlePricing1Selection = () => {
  const $pricing1SelectVal = $('#js-pricing1-select').val();
  const $pricing1PriceInput = $('#js-pricing1-input');

  if ( $pricing1SelectVal === "Not Applicable" ) {
    $pricing1PriceInput.val("");
    $pricing1PriceInput.prop('disabled', true);
  } else {
    $pricing1PriceInput.prop('disabled', false);
  }
};
const handlePricing2Selection = () => {
  const $pricing2SelectVal = $('#js-pricing2-select').val();
  const $pricing2PriceInput = $('#js-pricing2-input');

  if ( $pricing2SelectVal === "Not Applicable" ) {
    $pricing2PriceInput.val("");
    $pricing2PriceInput.prop('disabled', true);
  } else {
    $pricing2PriceInput.prop('disabled', false);
  }
};
const handlePricing3Selection = () => {
  const $pricing3SelectVal = $('#js-pricing3-select').val();
  const $pricing3PriceInput = $('#js-pricing3-input');

  if ( $pricing3SelectVal === "Not Applicable" ) {
    $pricing3PriceInput.val("");
    $pricing3PriceInput.prop('disabled', true);
  } else {
    $pricing3PriceInput.prop('disabled', false);
  }
};
const handlePricing4Selection = () => {
  const $pricing4SelectVal = $('#js-pricing4-select').val();
  const $pricing4PriceInput = $('#js-pricing4-input');

  if ( $pricing4SelectVal === "Not Applicable" ) {
    $pricing4PriceInput.val("");
    $pricing4PriceInput.prop('disabled', true);
  } else {
    $pricing4PriceInput.prop('disabled', false);
  }
};
// ************************************************************************* //
// Pricing Select Inputs - BEGIN
// ************************************************************************* //

$(function() {
  buildLegend();
  buildCountrySelectInput();

  // LISTENERS
  const $cancelButton = $('.js-button-cancel');
  const $tastingNoteForm = $('.tasting-form');

  // Country, Primary Appellations, Secondary Appellations select inputs.
  const $countrySelectInput = $('#js-country-select');
  const $primaryAppellationSelectInput = $('#js-primary-appellation-select');
  const $secondaryAppellationSelectInput = $('#js-secondary-appellation-select');
  $countrySelectInput.change(handleCountrySelection);
  $primaryAppellationSelectInput.change(handlePrimaryAppellationSelection);
  $secondaryAppellationSelectInput.change(handleSecondaryAppellationSelection);

  // toggle maps.
  $tastingNoteForm.on('click', '.js-country-map-span', toggleCountryMap);
  $tastingNoteForm.on('click', '.js-primary-app-map-span', togglePrimAppMap);
  $tastingNoteForm.on('click', '.js-secondary-app-map-span', toggleSecAppMap);

  // Pricing select inputs.
  const $pricing1 = $('#js-pricing1-select');
  const $pricing2 = $('#js-pricing2-select');
  const $pricing3 = $('#js-pricing3-select');
  const $pricing4 = $('#js-pricing4-select');
  $pricing1.change(handlePricing1Selection);
  $pricing2.change(handlePricing2Selection);
  $pricing3.change(handlePricing3Selection);
  $pricing4.change(handlePricing4Selection);

  // Primary Grape select input.
  const $primaryGrapeSelectInput = $('#js-primary-grape-select');
  $primaryGrapeSelectInput.change(addWineTypeText);

});