//


///// EVENTS List /////// - BEGIN
// function getEventsData(callbackFn) {
//   setTimeout(function(){ callbackFn(MOCK_EVENTS_DATA)}, 100);
// }

// this function stays the same when we connect
// to real API later
function renderEventsList(data) {
  console.log(data);
  // for (let i = 0; i < data.events.length ; i++) {
  //   $('body').append(
  //     // '<p>' + data.events[i].eventDesc + '</p>');
  //     `<p>${data.events[i].date} - ${data.events[i].eventDesc}</p>`);
  // }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayEventsData() {
  getDataFromApi(renderEventsList);
}
///// EVENTS List /////// - END

// ///// TASTINGS Lists /////// - BEGIN
// function getTastingsData(callbackFn) {
//   setTimeout(function(){ callbackFn(MOCK_TASTINGS_DATA)}, 100);
// }
//
// // this function stays the same when we connect
// // to real API later
// function displayTastingsList(data) {
//   for (let i = 0; i < data.tastings.length ; i++) {
//     $('body').append(
//       `<p>${data.tastings[i].wineName} - ${data.tastings[i].eventHost}</p>`);
//   }
// }
//
// // this function can stay the same even when we
// // are connecting to real API
// function getAndDisplayTastingsData() {
//   getTastingsData(displayTastingsList);
// }
// ///// TASTINGS /////// - END


// ///// TASTING DETAIL /////// - BEGIN
// function getTastingDetailData(callbackFn) {
//   setTimeout(function(){ callbackFn(MOCK_TASTING_DETAIL_DATA)}, 100);
// }
//
// // this function stays the same when we connect
// // to real API later
// function displayTastingDetail(data) {
//     $('body').append(
//       '<p>' + data.tastingNotes.date + '</p>' +
//       '<p>' + data.tastingNotes.eventHost + '</p>' +
//       '<p>' + data.tastingNotes.wineName + '</p>' +
//       '<p>' + data.tastingNotes.grapePrimary + '</p>' +
//       '<p>' + data.tastingNotes.country + '</p>'
//     );
// }
//
// // this function can stay the same even when we
// // are connecting to real API
// function getAndDisplayTastingDetail() {
//   getTastingDetailData(displayTastingDetail);
// }
// ///// TASTING DETAIL /////// - END

// ************************************************************************* //
// API Fetch - BEGIN
// ************************************************************************* //

function getDataFromApi(url, options, callback) {
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    data: options,
    success: callback,
    error: function() { console.log('something went wrong'); },
  });
}


// ************************************************************************* //
// API Fetch - END
// ************************************************************************* //



$(function() {
  // getAndDisplayEventsData();
  // getAndDisplayTastingsData();
  // getAndDisplayTastingDetail()

  let url = `http://localhost:8080`;
  let options = {

  };
  getDataFromApi(url, options, renderEventsList);
});