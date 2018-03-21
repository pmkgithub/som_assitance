'use strict';

const $cancelButton = $('.js-button-cancel');
const $saveButton = $('.js-button-save');

// ************************************************************************* //
// API Fetch - BEGIN
// ************************************************************************* //

function postDataToApi(url, options, callback) {
  console.log('options inside postDataToApi() = ', options);
  $.ajax({
    // async: true,
    url: url,
    method: 'POST',
    dataType: 'json',
    // contentType: 'application/json charset=utf-8',
    data: options,
    // data: JSON.stringify(options),
    success: callback,
    error: function(err) { console.log('something went wrong', err); },
  });

}

// ************************************************************************* //
// API Fetch - END
// ************************************************************************* //

function redirectToEventsViewOnCancel(event) {
  event.preventDefault();
  window.location = '/events';
}

function redirectToEventsViewOnSave(data) {
  console.log('res data = ', data);
  // console.log(data.message);
  // on success, navigate the user back to EVENTS LISTING.
  window.location = '/events';
}

function handleFormSubmit(event) {
  event.preventDefault();

  // const url = '/events/new'; // fragment url
  const url = 'http://localhost:8080/events/new'; //full url
  const eventName = $('.js-event-name').val();
  const eventHost = $('.js-event-host').val();

  console.log('eventName = ', eventName);
  console.log('eventHost = ', eventHost);

  // // POJO format
  // const options = {
  //   eventName: eventName,
  //   eventHost: eventHost
  // };

  // // in JSON format.
  // const options = {
  //   "eventName": eventName,
  //   "eventHost": eventHost
  // };

  // ES6 format
  const options = {
    eventName,
    eventHost
  };

  console.log('options before invoking postDataToApi() =', options);

  postDataToApi(url, options, redirectToEventsViewOnSave);
}

// listeners - <button> approach.
$cancelButton.on('click', redirectToEventsViewOnCancel);
$saveButton.on('click', handleFormSubmit);