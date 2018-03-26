'use strict';
// NOTE: When creating instance of this SINGLETON, use syntax below:
// const maps = new (require('./mappings_maps))();
// https://medium.com/@iaincollins/how-not-to-create-a-singleton-in-node-js-bd7fde5361f5


module.exports = function Country() {
  return {
    argentina: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Argentina-wine-map2_1024x1024.jpg?v=1504901310',
    australia: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Australia-wine-map2_1024x1024.jpg?v=1504901327',
    chile: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Chile-wine-map2_1024x1024.jpg?v=1504901370',
    france: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-All-wine-map2_1024x1024.jpg?v=1504901393',
    germany: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Germany-wine-map2.jpg?v=1504901537',
    italy: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Italy-wine-map2_1024x1024.jpg',
    newZealand: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-New-Zealand-wine-map2_1024x1024.jpg?v=1504901586',
    portugal: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Portugal-wine-map2.jpg?v=1504901609',
    spain: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-Spain-wine-map2.jpg?v=1504901137',
    southAfrica: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-South-Africa-wine-map2_1024x1024.jpg?v=1504901109',
    usCalifornia: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-California-wine-map2_1024x1024.jpg?v=1504901645',


  }
};

module.exports = function FranceAppellationPrimary() {
  return {
    franceAlsace: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2016/08/France-Alsace-Wine-Map-WineFolly2016-sml.jpg',
    franceBordeaux: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Bordeaux-wine-map2_1024x1024.jpg?v=1504901441',
    franceBurgundy: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Burgundy-wine-map2.jpg?v=1504901465',
    // old style
    franceChampagne: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2014/01/champagne-map-wine-folly.jpg#',
    franceLanguedoc: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/Languedoc-Rousillon-map-by-bentoit-france.jpg',
    franceLoireValley: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Loire-wine-map2_1024x1024.jpg?v=1504901000',
    franceRhone: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-France-Rhone-wine-map2_1024x1024.jpg?v=1504901519',
    // old style
    franceProvince: 'http://winefolly.com/wp-content/uploads/2013/08/provence-wine-region4-770x489.png',
  }

};

module.exports = function ItalyAppellationPrimary() {
  return {
    italyPiedmont: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/Piedmont-Italy-Wine-Map-2016-Wine-Folly-1.jpg#large',
    italyAltoAdige: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2013/07/alto-adige-map-3-2013.jpg#large',
  }

};

module.exports = function UsAppellationPrimary() {
  return {
    usCaliCentralCoast: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-CA-Central-Coast-wine-map2_1024x1024.jpg?v=1504901673',
    // old style
    usCaliNapa: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2014/01/Napa-Wine-Map-wine-folly.jpg#',
    usCaliNorthCoast: 'http://cdn.shopify.com/s/files/1/0203/1210/products/12x16-USA-CA-NorthCoast-wine-map2.jpg?v=1504901731',
    // old style
    usCaliSonoma: 'http://winefolly.wpengine.netdna-cdn.com/wp-content/uploads/2014/01/Sonoma-Wine-Map-wine-folly.jpg#',
  }

};