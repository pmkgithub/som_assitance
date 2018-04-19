'use strict';

const signoutCleanup = () => {
  localStorage.clear();
};

$(function() {
  $('.navbar .js-signout').on('click', signoutCleanup);

});