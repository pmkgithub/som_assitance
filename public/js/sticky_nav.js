'use strict';
const $navbar = $('div.navbar');
const $searchForm = $('form.search-form');
const $eventForm = $('form.event-form');
const $tastingForm = $('form.tasting-form');

if ( $searchForm.outerWidth() ) {
  $navbar.width($searchForm.outerWidth())
}
if ( $eventForm.outerWidth() ) {
  $navbar.width($eventForm.outerWidth())
}
if ( $tastingForm.outerWidth() ) {
  $navbar.width($tastingForm.outerWidth())
}

$(function() {

});