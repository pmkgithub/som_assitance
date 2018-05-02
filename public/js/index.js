'use strict';

const SIGNIN_URL = `/signin`;
const SIGNUP_URL = `/signup`;

const redirectToSignin = () => {
  window.location = SIGNIN_URL;
};
const redirectToSignup = () => {
  window.location = SIGNUP_URL;
};

$(function() {

  // Listeners
  const $signinButton = $('.js-signin-button');
  const $signupButton = $('.js-signup-button');
  $signinButton.on('click', redirectToSignin);
  $signupButton.on('click', redirectToSignup);

});