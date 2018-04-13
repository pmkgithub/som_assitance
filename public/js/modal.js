'use strict';

const $modal = $('#modal');

const openModal = (options) => {
  $modal.show();
};

const closeModal = () => {
  $modal.hide();
};

$(function() {
  $('.js-open-modal').on('click', openModal);
  $('.js-close-modal-icon').on('click', closeModal);
});