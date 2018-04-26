'use strict';

const SIGNIN_URL = `/signin`;
// ************************************************************************* //
// BLAH - BEGIN
// ************************************************************************* //

const redirectToSignin = () => {
  console.log('redirectToSignin ran');
  window.location = SIGNIN_URL;
};

$(function() {

  // Listeners
  const $signinButton = $('.js-overlay-signin-button');
  $signinButton.on('click', redirectToSignin);

});