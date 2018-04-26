'use strict';
const $navbar = $('div.navbar');
const $searchForm = $('form.search-form');
const $eventForm = $('form.event-form');
const $tastingForm = $('form.tasting-form');

const resizeStickyNav = () => {

  if ( $searchForm.outerWidth() ) {
    $navbar.width($searchForm.outerWidth())
  }
  if ( $eventForm.outerWidth() ) {
    $navbar.width($eventForm.outerWidth())
  }
  if ( $tastingForm.outerWidth() ) {
    $navbar.width($tastingForm.outerWidth())
  }

};


$(function() {
  // LOC below needed when page first loads,
  // or when user goes to page from another page.
  // NOTE: the function invocation.
  $(window).resize(resizeStickyNav());

  // LOC below needed when user resizes page
  // while on that page.
  $(window).resize(resizeStickyNav);
});