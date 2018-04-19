'use strict';

const TASTING_EVENTS_URL = `/events`;
const $passwordInput = $('.js-signup-password-input');
const $confPasswordInput = $('.js-signup-conf-password-input');

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
    // error: function(err) { console.log('something went wrong', err); },
    error: handlePostError,
  });

}

// ************************************************************************* //
// API POST - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Submit - BEGIN
// ************************************************************************* //
const handleFormSubmit = (e) => {
  e.preventDefault();

  let email = $('.js-signup-email-input').val();
  let password = $passwordInput.val();
  let confPassword = $confPasswordInput.val();

  // TODO - code Server-side Validation.
  // Server-side Validation

  if ( !email ) {  }
  if ( !password ) {  }
  if ( !confPassword ) {  }

  if (password !== confPassword) {
    passwordsDontMatch();
  }

  const options = {
    email,
    password
  };

  // const eventId = localStorage.getItem('eventId');
  postDataToApi(`/api/signup`, options, redirectToEventsList);

};

// ************************************************************************* //
// Handle Submit - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Existing User on Signup - BEGIN
// ************************************************************************* //
const handlePostError = (err) => {
  const $invalidSignupMessage = $('.js-invalid-signup');
  const $signupEmail = $('#signup-email');
  const $signupPassword = $('#signup-password');
  const $signupConfPassword = $('#signup-conf-password');

  if ( err.status === 422) {

    $invalidSignupMessage.show();

    setTimeout(() => {
      $invalidSignupMessage.hide();
      $signupEmail.val("");
      $signupEmail.focus();
      $signupPassword.val("");
      $signupConfPassword.val("");
    }, 3000);

  }
};
// ************************************************************************* //
// Handle Existing User on Signup - END
// ************************************************************************* //

// ************************************************************************* //
// Passwords Don't Match - BEGIN
// ************************************************************************* //
const passwordsDontMatch = () => {
  $passwordInput.focus();

  $confPasswordInput.attr({"type": "text"});
  $confPasswordInput.css({"color": "red"});
  $confPasswordInput.val("Password Don't Match" );
  setTimeout(function() {
    $confPasswordInput.css({"color": "black"});
    $confPasswordInput.attr({"type": "password"});
    $confPasswordInput.val('');
  }, 2000);

};
// ************************************************************************* //
// Passwords Don't Match - END
// ************************************************************************* //

// ************************************************************************* //
// Redirect to Events List - BEGIN
// ************************************************************************* //
const redirectToEventsList = (response) => {

  // set localstorage token
  localStorage.setItem('token', response.token);

  // redirect to Events List
  window.location = TASTING_EVENTS_URL;
};
// ************************************************************************* //
// Redirect to Events List - END
// ************************************************************************* //


$(function() {

  // clear form on page load.
  $('.js-signup-email-input').val('');
  $('.js-signup-password-input').val('');
  $('.js-signup-conf-password-input').val('');

  // Listeners
  // const $jsSigninButton = $('.js-signin-button');
  const $signupForm = $('.signup-form');
  $signupForm.on('submit', handleFormSubmit);

});