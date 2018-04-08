'use strict';
// search_results.js
//  retrieve search terms from localstorage
//  send ajax POST request /api/search
//  POST success sends data to search_results.html
//  loop over data, render HTML in search_results.html
const STATE = {
  searchPrice: null
};
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

  // set STATE var for later logic determining which pricing was the matched price.
  STATE.matchedPrice = searchPrice;

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
  console.log('handleFormSubmit ran');
  e.preventDefault();

  // DEV - TEST CSS
  const options = {
    searchGrape: "Malbec",
    searchRating: "3",
    searchPrice: "20",
  };

  // TODO - current WIP - uncomment when done
  // // PRODUCTION
  // const searchGrape = $primaryGrapeSelect.val();
  // const searchRating = $ratingSelectInput.val();
  // const searchPrice =  $priceInput.val();
  //
  // const options = {
  //   searchGrape,
  //   searchRating,
  //   searchPrice,
  // };

  postDataToApi(`/api/search`, options, renderSearchResults);
}

// // future code ?
// function redirectToEventsListOnCancel() {
//   window.location = TASTING_EVENTS_LIST_URL;
// }

// ************************************************************************* //
// Handle Submit - END
// ************************************************************************* //

// TODO - revisit once New Tasting Note form working with NUMBERS
// // ************************************************************************* //
// // Get Matched Price - BEGIN
// // ************************************************************************* //
// const getLowestPrice = (result) => {
//   let lowest = {};
//
//   // TODO - for testing - remove when done.
//   STATE.searchPrice = '20';
//   console.log('result ', result);
//   console.log('STATE.searchPrice = ', STATE.searchPrice);
//   console.log('result.pricing1Price = ', result.pricing1Price);
//   console.log('result.pricing1Desc = ', result.pricing1Desc);
//
//   // if ( result.pricing1Price === STATE.searchPrice ) {
//   //   match.matchedPrice = result.pricing1Price;
//   //   match.matchedPriceDesc = result.pricing1Desc;
//   // }
//   // if ( result.pricing2Price <= STATE.searchPrice ) {
//   //   match.matchedPrice = result.pricing2Price;
//   //   match.matchedPriceDesc = result.pricing2Desc;
//   // }
//   // if ( result.pricing3Price <= STATE.searchPrice ) {
//   //   match.matchedPrice = result.pricing3Price;
//   //   match.matchedPriceDesc = result.pricing3Desc;
//   // }
//   // if ( result.pricing4Price <= STATE.searchPrice ) {
//   //   match.matchedPrice = result.pricing4Price;
//   //   match.matchedPriceDesc = result.pricing4Desc;
//   // }
//   //
//   // return match;
//
//   const prices = [
//     result.pricing1Price,
//     result.pricing2Price,
//     result.pricing3Price,
//     result.pricing4Price,
//   ];
//
//   const lowestPrice = Math.min(...prices);
//   lowest.lowestPrice = lowestPrice;
//
//   if ( result.pricing1Price === lowestPrice ) {
//     lowest.matchedPriceDesc = result.pricing1Desc;
//   }
//   if ( result.pricing2Price === lowestPrice ) {
//     lowest.matchedPriceDesc = result.pricing2Desc;
//   }
//   if ( result.pricing3Price === lowestPrice ) {
//     lowest.matchedPriceDesc = result.pricing3Desc;
//   }
//   if ( result.pricing4Price === lowestPrice ) {
//     lowest.matchedPriceDesc = result.pricing4Desc;
//   }
//    return lowest;
// };
// // ************************************************************************* //
// // Get Matched Price - END
// // ************************************************************************* //

// ************************************************************************* //
// Render Search Results - BEGIN
// ************************************************************************* //
const renderSearchResults = (searchResults) => {
  console.log('searchResults = ', searchResults);

  for (let i = 0; i < searchResults.length ; i++) {

    const mDate = moment(searchResults[i].timestamp).format('MMMM D, YYYY');
    // const {lowestPrice, lowestPriceDesc} = getLowestPrice(searchResults[i]);
    // console.log('lowestPrice =', lowestPrice);
    // console.log('lowestPriceDesc =', lowestPriceDesc);

    $('ul.js-search-results-ul').append(
      `<li class="result-li js-result-li">  
          <span class="result-header-span js-result-header-span">
              ${searchResults[i].wineName} Rating: ${searchResults[i].rating}
          </span>
          <div class="result-detail-wrapper js-result-detail-wrapper">
              <div>Date: ${mDate}</div>  
              <div>Event Host: ${searchResults[i].eventHost}</div>
              <div>Event Name: ${searchResults[i].eventName}</div>
              <div>Rating: ${searchResults[i].rating}</div>
              <div>
                  Pricing 1: ${searchResults[i].pricing1Desc} - ${searchResults[i].pricing1Price}
              </div>
              <div>
                  Pricing 2: ${searchResults[i].pricing2Desc} - ${searchResults[i].pricing2Price}
              </div>
              <div>
                  Pricing 3: ${searchResults[i].pricing3Desc} - ${searchResults[i].pricing3Price}
              </div>       
              <div>
                  Pricing 4: ${searchResults[i].pricing4Desc} - ${searchResults[i].pricing4Price}
              </div>                         
              <div>
                <span>Tasting Notes:</span>
                <div class="tasting-notes">${searchResults[i].tastingNotes}</div>
              </div>
                
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
  $resultHeaderSpan.siblings('.js-result-detail-wrapper').toggle();
}
// ************************************************************************* //
// Toggles - END
// ************************************************************************* //
$(function() {
  doOnPageLoad();

  // LISTENERS
  const $searchFormInSearchResultsPage = $('.search-form');
  const $searchResultsList = $('.js-search-results-ul');
  $searchFormInSearchResultsPage.on('submit', handleFormSubmit);
  $searchResultsList.on('click', '.js-result-header-span', toggleResultDetail)

});