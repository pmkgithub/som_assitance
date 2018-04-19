'use strict';

const TASTING_EVENTS_URL = `/events`;
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
  console.log('handleSubmit ran');

  // FOR PRODUCTION
  let email = $('.js-signin-email-input').val();
  let password = $('.js-signin-password-input').val();

  console.log('email ', email);
  console.log('password ', password);

  // TODO - code Server-side Validation.
  // Server-side Validation

  if ( !email ) {  }
  if ( !password ) {  }


  const options = {
    email,
    password
  };

  // const eventId = localStorage.getItem('eventId');
  postDataToApi(`/api/signin`, options, redirectToEventsList);

};

// ************************************************************************* //
// Handle Submit - END
// ************************************************************************* //

// ************************************************************************* //
// Handle Ajax Error - BEGIN
// ************************************************************************* //
const handlePostError = (err) => {
  const $invalidSigninMessage = $('.js-invalid-signin');
  const $signinEmail = $('#signin-email');
  const $signinPassword = $('#signin-password');

  if ( err.status === 401) {

    $invalidSigninMessage.show();

    setTimeout(function() {
      $invalidSigninMessage.hide();
      $signinEmail.val("");
      $signinEmail.focus();
      $signinPassword.val("");
    }, 3000);

  }
};
// ************************************************************************* //
// Handle Ajax Error - END
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
  $('.js-signin-email-input').val('');
  $('.js-signin-password-input').val('');

  // Listeners
  // const $jsSigninButton = $('.js-signin-button');
  const $signinForm = $('.signin-form');
  $signinForm.on('submit', handleFormSubmit);

});