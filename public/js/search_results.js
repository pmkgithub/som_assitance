'use strict';

const $primaryGrapeSelect = $('#js-search-primary-grape-select');
const $ratingSelectInput = $('#js-search-rating-select');
const $priceInput = $('#js-search-price');

// ************************************************************************* //
// doOnPageLoad - BEGIN
// ************************************************************************* //
const doOnPageLoad = () => {
  const searchGrape = localStorage.getItem('searchGrape');
  const searchRating = localStorage.getItem('searchRating');
  let searchPrice = localStorage.getItem('searchPrice'); // searchPrice is stored as cents

  $('.js-no-search-results').hide();

  populateSearchFormOnPageLoad(searchGrape, searchRating, searchPrice);

  const options = {
    searchGrape,
    searchRating,
    searchPrice
  };

  postDataToApi(`/api/search`, options, renderSearchResults);

  // clear localstorage.
  localStorage.setItem('searchGrape', '');
  localStorage.setItem('searchRating', '');
  localStorage.setItem('searchPrice', '');
};

// ************************************************************************* //
// doOnPageLoad - BEGIN
// ************************************************************************* //

// ************************************************************************* //
// Populate Search Form on Page Load - BEGIN
// ************************************************************************* //
const populateSearchFormOnPageLoad = (searchGrape, searchRating, searchPrice) => {

  const displaySearchPriceInputAsDollars = (searchPrice) => {
    return Number(searchPrice).toFixed(2);
  };

  buildPrimaryGrapesSelectInput();

  if ( !searchGrape ) {
    // do nothing.
  } else {
    $primaryGrapeSelect.val(searchGrape);
  }
  if ( !searchRating ) {
    // do nothing.
  } else {
    $ratingSelectInput.val(searchRating);
  }

  if ( !searchPrice ) {
    // do nothing.
  } else {
    $priceInput.val(displaySearchPriceInputAsDollars(searchPrice));
  }

};
// ************************************************************************* //
// Populate Search Form on Page Load - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Primary Grape Select Input - BEGIN
// ************************************************************************* //
const getGrapes = () => {
  let grapes = [];

  // get all grapes.
  Object.keys(PRIMARY_GRAPES).forEach((grape) => {
    grapes.push(PRIMARY_GRAPES[grape].grapeName);
  });

  grapes.sort();
  grapes.push("Other");
  grapes.push("Don't Know");
  return grapes;

};
// populate Search Form Primary Grape Select
const buildPrimaryGrapesSelectInput = () => {
  const $primaryGrapeSelectInput = $('#js-search-primary-grape-select');
  const primaryGrapes = getGrapes();
  let html = `<option value="" disabled selected>Select a Primary Grape</option>`;

  primaryGrapes.forEach((grape) => {
    html += `<option value="${grape}">${grape}</option>`;
  });
  $primaryGrapeSelectInput.append(html);
};
// ************************************************************************* //
// Populate Primary Grape Select Input - END
// ************************************************************************* //

// ************************************************************************* //
// API POST - BEGIN
// ************************************************************************* //

function postDataToApi(url, options, callback) {

  const token = localStorage.getItem('token');

  $.ajax({
    url: url,
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    headers: {"authorization": token},
    data: JSON.stringify(options),
    dataType: 'json',
    success: callback,
    error: function(err) { console.log('something went wrong', err); },
  });

}
// ************************************************************************* //
// API POST - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Submit - BEGIN
// ************************************************************************* //
function handleFormSubmit(e) {
  e.preventDefault();

  // PRODUCTION
  // clear Results list HTML.
  $('.js-search-results-ul').empty();
  $('.js-no-search-results').hide();

  // set up OPTION for ajax POST.
  const searchGrape = $primaryGrapeSelect.val();
  const searchRating = $ratingSelectInput.val();
  // NOTE: searchPrice is converted to cents and Integer in searchController.js
  const searchPrice =  $priceInput.val();

  const options = {
    searchGrape,
    searchRating,
    searchPrice,
  };

  postDataToApi(`/api/search`, options, renderSearchResults);
}

// ************************************************************************* //
// Handle Submit - END
// ************************************************************************* //

// ************************************************************************* //
// Get Lowest Price - BEGIN
// ************************************************************************* //
const getLowestPrice = (result) => {

  let price1 = result.pricing1Price;
  let price2 = result.pricing2Price;
  let price3 = result.pricing3Price;
  let price4 = result.pricing4Price;
  let prices = [];
  let lowest = {};

  // Build "prices" array, excluding prices where pricing is 0.
  if ( !(price1 === 0 ) ) {
    prices.push(Number(price1))
  }
  if ( !(price2 === 0 ) ) {
    prices.push(Number(price2))
  }
  if ( !(price3 === 0 ) ) {
    prices.push(Number(price3))
  }
  if ( !(price4 === 0 ) ) {
    prices.push(Number(price4))
  }

  // Find lowest price
  const lowestPrice = Math.min(...prices);
  lowest.lowestPrice = lowestPrice;

  // set lowestPriceDesc
  if ( result.pricing1Price === lowestPrice ) {
    lowest.lowestPriceDesc = result.pricing1Desc;
  }
  if ( result.pricing2Price === lowestPrice ) {
    lowest.lowestPriceDesc = result.pricing2Desc;
  }
  if ( result.pricing3Price === lowestPrice ) {
    lowest.lowestPriceDesc = result.pricing3Desc;
  }
  if ( result.pricing4Price === lowestPrice ) {
    lowest.lowestPriceDesc = result.pricing4Desc;
  }
  return lowest;
};
// ************************************************************************* //
// Get Lowest Price - END
// ************************************************************************* //

// ************************************************************************* //
// Render Search Results - BEGIN
// ************************************************************************* //
const renderSearchResults = (searchResults) => {

  // display "No Results" if API query returns an empty array
  if ( searchResults.length < 1 ) {
    $('.js-no-search-results').show();
  }

  const displayCentsAsDollars = (cents) => {
    return cents === 0 ? "No Price Entered" : `$${ (cents/100).toFixed(2) }`;
  };

  for (let i = 0; i < searchResults.length ; i++) {

    const mDate = moment(searchResults[i].timestamp).format('MM/D/YY');
    // TODO - maybe put Rating, Pricing in a popup when "result-desc-span" hovered.
    const {lowestPrice, lowestPriceDesc} = getLowestPrice(searchResults[i]);

    $('ul.js-search-results-ul').append(
`<li class="result-li js-result-li">

  <div class="result-desc">
    <span class="result-desc-winename-span js-result-desc-winename-span">${searchResults[i].wineName}</span>
    <span class="result-desc-pricing-span">${ displayCentsAsDollars(lowestPrice) } at ${lowestPriceDesc}</span>
    <!--<span class="result-desc-date-span">${mDate}</span>-->
  </div>

  <div class="result-detail-wrapper js-result-detail-wrapper">  
    
    <div class="eventhost-wrapper">
        Event Host:
        <span class="eventhost-span">${searchResults[i].eventHost}</span>
    </div>
    
    <div class="eventname-wrapper">
        Event Name:
        <span class="eventname-span">${searchResults[i].eventName}</span>
    </div>
    
    <div class="rating-wrapper">
        Rating:
        <span class="rating-span">${searchResults[i].rating}</span>
    </div>
    <div class="pricing1-wrapper">
        Pricing 1:
        <span class="pricing1-span">${searchResults[i].pricing1Desc} - ${displayCentsAsDollars(searchResults[i].pricing1Price)}</span>
    </div>
    <div class="pricing2-wrapper">
        Pricing 2:
        <span class="pricing2-span">${searchResults[i].pricing2Desc} - ${displayCentsAsDollars(searchResults[i].pricing2Price)}</span>
    </div>
    <div class="pricing3-wrapper">
        Pricing 3:
        <span class="pricing3-span">${searchResults[i].pricing3Desc} - ${displayCentsAsDollars(searchResults[i].pricing3Price)}</span>
    </div>       
    <div class="pricing4-wrapper">
        Pricing 4:
        <span class="pricing4-span">${searchResults[i].pricing4Desc} - ${displayCentsAsDollars(searchResults[i].pricing4Price)}</span>
    </div>                         
    <div class="tasting-note">Tasting Notes:</div>
    <textarea class="tn-textarea" name="" id="" cols="30" rows="10">${searchResults[i].tastingNotes}</textarea>
    
  </div>
</li>`);

  }
};
// ************************************************************************* //
// Render Search Results - END
// ************************************************************************* //

// ************************************************************************* //
// Toggles - BEGIN
// ************************************************************************* //
function toggleResultDetail(e) {
  e.stopPropagation();
  const $resultHeaderSpan = $(e.target);
  $resultHeaderSpan.parent().siblings('.js-result-detail-wrapper').toggle();
}
// ************************************************************************* //
// Toggles - END
// ************************************************************************* //

$(function() {
  doOnPageLoad();

  // Listeners.
  const $searchFormInSearchResultsPage = $('.search-form');
  const $searchResultsList = $('.js-search-results-ul');
  $searchFormInSearchResultsPage.on('submit', handleFormSubmit);
  // $searchResultsList.on('click', '.js-result-desc-span', toggleResultDetail);
  $searchResultsList.on('click', '.js-result-desc-winename-span', toggleResultDetail);

});