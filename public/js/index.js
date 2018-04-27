'use strict';

const SIGNIN_URL = `/signin`;

const redirectToSignin = () => {
  window.location = SIGNIN_URL;
};

$(function() {

  // Listeners
  const $signinButton = $('.js-signin-button');
  $signinButton.on('click', redirectToSignin);

});