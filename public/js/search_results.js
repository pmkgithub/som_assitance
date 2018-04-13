'use strict';
// search_results.js
//  retrieve search terms from localstorage
//  send ajax POST request /api/search
//  POST success sends data to search_results.html
//  loop over data, render HTML in search_results.html

const $primaryGrapeSelect = $('#js-search-primary-grape-select');
const $ratingSelectInput = $('#js-search-rating-select');
const $priceInput = $('#js-search-price');

// TODO - is this code needed?
// // ************************************************************************* //
// // Get LOCALSTORAGE Values on Page Load - BEGIN
// // ************************************************************************* //
// const getLocalstorage = () => {
//   const searchGrape = localStorage.getItem('searchGrape');
//   const searchRating = localStorage.getItem('searchRating');
//   const searchPrice = localStorage.getItem('searchPrice');
//   console.log('queryGrape', searchGrape);
//   console.log('queryRating', searchRating);
//   console.log('queryPrice', searchPrice);
// };
//
// // ************************************************************************* //
// // Get LOCALSTORAGE Values on Page Load - END
// // ************************************************************************* //

// ************************************************************************* //
// doOnPageLoad - BEGIN
// ************************************************************************* //
const doOnPageLoad = () => {
  const searchGrape = localStorage.getItem('searchGrape');
  const searchRating = localStorage.getItem('searchRating');
  const searchPrice = localStorage.getItem('searchPrice');

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
  if ( !searchRating ) {
    // do nothing.
  } else {
    $priceInput.val(searchPrice);
  }

};
// ************************************************************************* //
// Populate Search Form on Page Load - END
// ************************************************************************* //

// ************************************************************************* //
// Populate Primary Grape Select Input - BEGIN
// ************************************************************************* //
const COUNTRIES =  {
  algeria: "Algeria",
  argentina: "Argentina",
  australia: "Australia",
  austria: "Austria",
  brazil: "Brazil",
  bulgaria: "Bulgaria",
  canada: "Canada",
  chile: "Chile",
  china: "China",
  corsica: "Corsica",
  czech_republic: "Czech Republic",
  france: "France",
  germany: "Germany",
  greece: "Greece",
  hungary: "Hungary",
  italy: "Italy",
  madeira: "Madeira",
  mexico: "Mexico",
  moldova: "Moldova",
  morocco: "Morocco",
  new_zealand: "New Zealand",
  portugal: "Portugal",
  portugal_madeira: "Madeira Island, Portugal",
  romania: "Romania",
  sardinia: "Sardinia",
  sicily: "Sicily",
  slovakia: "Slovakia",
  south_africa: "South Africa",
  spain: "Spain",
  switzerland: "Switzerland",
  tunisia: "Tunisia",
  turkey: "Turkey",
  ukraine: "Ukraine",
  united_states: "United States"
};
const PRIMARY_GRAPES = {
  cava: {
    grapeName: "Cava",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.spain
    ]
  },
  champagne: {
    grapeName: "Champagne",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  usa_champagne: {
    grapeName: "USA Champagne",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.united_states
    ]
  },
  lambrusco: {
    grapeName: "Lambrusco",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  prosecco: {
    grapeName: "Prosecco",
    wineType: "Sparkling Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  albarino: {
    grapeName: "Albarino",
    wineType: "Light-Bodied White Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.portugal,
      COUNTRIES.united_states
    ]
  },
  gruener_veltliner: {
    grapeName: 'Gruener Veltliner',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.austria,
      COUNTRIES.slovakia,
      COUNTRIES.czech_republic,
      COUNTRIES.hungary
    ]
  },
  muscadet: {
    grapeName: 'Muscadet',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.france
    ]
  },
  pinot_gris: {
    grapeName: 'Pinot Gris',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.germany,
      COUNTRIES.australia,
      COUNTRIES.france,
      COUNTRIES.moldova,
      COUNTRIES.hungary
    ]
  },
  sauvignon_blanc: {
    grapeName: 'Sauvignon Blanc',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.france,
      COUNTRIES.new_zealand,
      COUNTRIES.chile,
      COUNTRIES.south_africa,
      COUNTRIES.moldova,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.romania,
      COUNTRIES.spain,
      COUNTRIES.italy,
      COUNTRIES.ukraine,
      COUNTRIES.argentina
    ]
  },
  soave: {
    grapeName: 'Soave',
    wineType: 'Light-Bodied White Wine',
    countries: [COUNTRIES.italy]
  },
  vermentino: {
    grapeName: 'Vermentino',
    wineType: 'Light-Bodied White Wine',
    countries: [
      COUNTRIES.france,
      COUNTRIES.corsica,
      COUNTRIES.italy,
      COUNTRIES.sardinia
    ]

  },
  chardonnay: {
    grapeName: 'Chardonnay',
    wineType: 'Full-Bodied White Wine',
    countries: [
      COUNTRIES.france,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.italy,
      COUNTRIES.chile,
      COUNTRIES.south_africa,
      COUNTRIES.spain,
      COUNTRIES.argentina,
      COUNTRIES.moldova,
      COUNTRIES.new_zealand
    ]
  },
  marsanne_blend: {
    grapeName: 'Marsanne Blend',
    wineType: 'Full-Bodied White Wine',
    countries: [
      COUNTRIES.france
    ]
  },
  semillom: {
    grapeName: "Semillon",
    wineType: "Full-Bodied White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.chile,
      COUNTRIES.south_africa,
      COUNTRIES.argentina,
      COUNTRIES.united_states,
      COUNTRIES.turkey
    ]
  },
  viognier: {
    grapeName: "Vionier",
    wineType: "Full-Bodied White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.united_states
    ]
  },
  chenin_blanc: {
    grapeName: "Chenin Blanc",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.south_africa,
      COUNTRIES.france,
      COUNTRIES.argentina,
      COUNTRIES.united_states,
      COUNTRIES.turkey
    ]
  },
  gewurtztraminer: {
    grapeName: "Gewurtztraminer",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.moldova,
      COUNTRIES.ukraine,
      COUNTRIES.australia,
      COUNTRIES.germany,
      COUNTRIES.united_states
    ]
  },
  muscat_blanc: {
    grapeName: "Mucat Blanc",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.france,
      COUNTRIES.greece,
      COUNTRIES.spain,
      COUNTRIES.brazil,
      COUNTRIES.united_states,
      COUNTRIES.portugal
    ]
  },
  riesling: {
    grapeName: "Riesling",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.germany,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.france,
      COUNTRIES.ukraine,
      COUNTRIES.moldova,
      COUNTRIES.hungary
    ]
  },
  torrontes: {
    grapeName: "Torrontes",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.argentina
    ]
  },
  rose: {
    grapeName: "Rose",
    wineType: "Aromatic White Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.spain
    ]
  },
  gamay: {
    grapeName: "Gamay",
    wineType: "Light-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.switzerland,
      COUNTRIES.canada,
      COUNTRIES.turkey
    ]
  },
  pinot_noir: {
    grapeName: "Pinot Noir",
    wineType: "Light-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.united_states,
      COUNTRIES.germany,
      COUNTRIES.moldova,
      COUNTRIES.italy,
      COUNTRIES.new_zealand,
      COUNTRIES.australia,
      COUNTRIES.switzerland
    ]
  },
  barbera: {
    grapeName: "Barbera",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.argentina
    ]
  },
  cabnernet_franc: {
    grapeName: "Cabernet Franc",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.hungary,
      COUNTRIES.chile,
      COUNTRIES.south_africa
    ]
  },
  carignan: {
    grapeName: "Carignan",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.united_states,
      COUNTRIES.argentina
    ]
  },
  carmenere: {
    grapeName: "Carmenere",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.chile,
      COUNTRIES.china,
      COUNTRIES.italy
    ]
  },
  grenache: {
    grapeName: "Grenache",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.spain,
      COUNTRIES.italy,
      COUNTRIES.algeria,
      COUNTRIES.united_states,
      COUNTRIES.australia
    ]
  },
  mencia: {
    grapeName: "Mencia",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.portugal
    ]
  },
  merlot: {
    grapeName: "Merlot",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.united_states,
      COUNTRIES.spain,
      COUNTRIES.italy,
      COUNTRIES.romania,
      COUNTRIES.bulgaria,
      COUNTRIES.chile,
      COUNTRIES.australia
    ]
  },
  montepulciano: {
    grapeName: "Montepulciano",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.argentina
    ]
  },
  negroamaro: {
    grapeName: "Negroamaro",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  gsm_blend: {
    grapeName: "GSM (Granache, Syrah, Mourvedre) Blend",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  sangiovese: {
    grapeName: "Sangiovese",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.argentina,
      COUNTRIES.france,
      COUNTRIES.tunisia,
      COUNTRIES.united_states,
      COUNTRIES.australia
    ]
  },
  valpolicella_blend: {
    grapeName: "Valpolicella Blend",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  zinfandel: {
    grapeName: "Zinfandel",
    wineType: "Medium-Bodied Red Wine",
    countries: [
      COUNTRIES.united_states,
      COUNTRIES.italy
    ]
  },
  aglianico: {
    grapeName: "Aglianico",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  bordeaux_blend: {
    grapeName: "Bordeaux Blend",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  cabernet_sauvignon: {
    grapeName: "Cabernet Sauvignon",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.chile,
      COUNTRIES.united_states,
      COUNTRIES.australia,
      COUNTRIES.spain,
      COUNTRIES.china,
      COUNTRIES.argentina,
      COUNTRIES.italy,
      COUNTRIES.south_africa
    ]
  },
  malbec: {
    grapeName: "Malbec",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.argentina,
      COUNTRIES.france,
      COUNTRIES.chile,
      COUNTRIES.united_states,
      COUNTRIES.south_africa,
      COUNTRIES.australia,
      COUNTRIES.italy
    ]
  },
  mourvedre: {
    grapeName: "Mourvedre",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.united_states,
      COUNTRIES.south_africa
    ]
  },
  nebbilo: {
    grapeName: "Nebbiolo",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
      COUNTRIES.mexico,
      COUNTRIES.argentina,
      COUNTRIES.australia,
      COUNTRIES.united_states
    ]
  },
  nero_davola: {
    grapeName: "Nero D'Avola",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.italy,
    ]
  },
  petit_verdot: {
    grapeName: "Petit Verdot",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.united_states,
      COUNTRIES.south_africa,
      COUNTRIES.chile,
      COUNTRIES.argentina
    ]
  },
  petite_sirah: {
    grapeName: "Petite Sirah",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.united_states
    ]
  },
  pinotage: {
    grapeName: "Pinotage",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.south_africa
    ]
  },
  syrah: {
    grapeName: "Syrah",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.france,
      COUNTRIES.australia,
      COUNTRIES.spain,
      COUNTRIES.argentina,
      COUNTRIES.south_africa,
      COUNTRIES.united_states,
      COUNTRIES.italy,
      COUNTRIES.chile,
      COUNTRIES.portugal
    ]
  },
  tempranillo: {
    grapeName: "Tempranillo",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.spain,
      COUNTRIES.portugal,
      COUNTRIES.argentina,
      COUNTRIES.france,
      COUNTRIES.australia
    ]
  },
  touriga_nacional: {
    grapeName: "Touriga Nacional",
    wineType: "Full-Bodied Red Wine",
    countries: [
      COUNTRIES.portugal
    ]
  },
  madeira: {
    grapeName: "Madeira",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.portugal_madeira
    ]
  },
  marsala: {
    grapeName: "Marsala",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
  port: {
    grapeName: "Port",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.portugal
    ]
  },
  sauternais: {
    grapeName: "Sauternais",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.france
    ]
  },
  sherry: {
    grapeName: "Sherry",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.spain
    ]
  },
  vin_santo: {
    grapeName: "Vin Santo",
    wineType: "Dessert Wine",
    countries: [
      COUNTRIES.italy
    ]
  },
};

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
  $.ajax({
    url: url,
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
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

  // // DEV - for testing CSS changes.
  // // Also comment/uncomment postDataToApi(`/api/search`, options, renderSearchResults);
  // const options = {
  //   searchGrape: "Barbera",
  //   searchRating: "3",
  //   searchPrice: "25",
  // };

  // PRODUCTION
  // clear Results list HTML.
  $('.js-search-results-ul').empty();
  $('.js-no-search-results').hide();

  // set up OPTION for ajax POST.
  const searchGrape = $primaryGrapeSelect.val();
  const searchRating = $ratingSelectInput.val();
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

  // Handle the text strings "No Price Entered"
  if ( !(price1 === "No Price Entered") ) {
    prices.push(Number(price1))
  }
  if ( !(price2 === "No Price Entered") ) {
    prices.push(Number(price2))
  }
  if ( !(price3 === "No Price Entered") ) {
    prices.push(Number(price3))
  }
  if ( !(price4 === "No Price Entered") ) {
    prices.push(Number(price4))
  }

  // Find lowest price
  const lowestPrice = String(Math.min(...prices));
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

  for (let i = 0; i < searchResults.length ; i++) {

    const mDate = moment(searchResults[i].timestamp).format('MMMM D, YYYY');
    // TODO - LOC below: used when "lowestPrice", "lowestPriceDesc" added to "result-desc-span"
    // TODO - maybe put Rating, Pricing in a popup when "result-desc-span" hovered.
    const {lowestPrice, lowestPriceDesc} = getLowestPrice(searchResults[i]);

    $('ul.js-search-results-ul').append(
`<li class="result-li js-result-li">

  <div class="result-desc">
    <span class="result-desc-span js-result-desc-span">
        <span class="result-desc-winename-span">${searchResults[i].wineName}</span>
        <span class="result-desc-pricing-span">$${lowestPrice} at ${lowestPriceDesc}</span>
    </span>
    <span class="result-date-span">${mDate}</span>
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
        <span class="pricing1-span">${searchResults[i].pricing1Desc} - ${searchResults[i].pricing1Price}</span>
    </div>
    <div class="pricing2-wrapper">
        Pricing 2:
        <span class="pricing2-span">${searchResults[i].pricing2Desc} - ${searchResults[i].pricing2Price}</span>
    </div>
    <div class="pricing3-wrapper">
        Pricing 3:
        <span class="pricing3-span">${searchResults[i].pricing3Desc} - ${searchResults[i].pricing3Price}</span>
    </div>       
    <div class="pricing4-wrapper">
        Pricing 4:
        <span class="pricing4-span">${searchResults[i].pricing4Desc} - ${searchResults[i].pricing4Price}</span>
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
  console.log('toggleResultDetail ran');
  console.log('e.target', e.target);
  e.stopPropagation();
  const $resultHeaderSpan = $(e.target);
  $resultHeaderSpan.parent().parent().siblings('.js-result-detail-wrapper').toggle();
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
  $searchResultsList.on('click', '.js-result-desc-span', toggleResultDetail);

});