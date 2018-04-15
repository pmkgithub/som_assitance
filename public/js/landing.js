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
    error: function(err) { console.log('something went wrong', err); },
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
// Redirect to Events List - BEGIN
// ************************************************************************* //
const redirectToEventsList = (response) => {
  console.log('redirectToEventsListOnAuth ran');
  console.log('response = ', response);

  // TODO - set USER to localstorage
  // on tasting_events_list.js list page grab the userId from ls
  // on backend, getAllTastingEvents endpoint, modify url to 'events/:userId'
  // in Event/TastingNote models, add userId property.
  // when creating a new Event on frontend, get userId from ls, and pass it with the POST request to backend
  //    so the Event MODEL will store the userId.
  localStorage.setItem('userId', response.userId);

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