$(document).ready(function () {
  let currentFloor = 2;
  let currentRoom = 7;
  const counterUp = $('.counter-up');
  const counterDown = $('.counter-down');
  const floorPath = $('.home-img path');
  const roomPath = $('.modal .modal-floor path');
  const modalItem = $('.modal .modal-list .modal-item');
  const btnW = $('.main-info .button-primary');
  const close = $('.modal .close');
  const modal = $('.modal');

  // modal.on('click', function () {
  //   modal.removeClass('active');
  // });

  btnW.on('click', function () {
    modal.addClass('active');
  });

  close.on('click', function () {
    modal.removeClass('active');
  });

  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
  });

  floorPath.on('mouseout', function () {
    $(this).addClass('current-floor');
  });

  roomPath.on('mouseover', function () {
    roomPath.removeClass('current-room');
    modalItem.removeClass('current-modal-item');
    currentRoom = $(this).attr('data-room');
    for (let i = 0; i < modalItem.length; i++) {
      if (modalItem.eq(i).attr('data-room') === $(this).attr('data-room')) {
        modalItem.eq(i).addClass('current-modal-item');
      }
    }
  });

  modalItem.on('mouseover', function () {
    roomPath.removeClass('current-room');
    modalItem.removeClass('current-modal-item');
    currentRoom = $(this).attr('data-room');
    $(this).addClass('current-modal-item');
    for (let i = 0; i < roomPath.length; i++) {
      if (roomPath.eq(i).attr('data-room') === $(this).attr('data-room')) {
        roomPath.eq(i).addClass('current-room');
      }
    }
  });

  modalItem.on('mouseout', function () {
    roomPath.removeClass('current-room');
  });

  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCorrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $('.counter').text(usCorrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCorrentFloor}]`).toggleClass('current-floor');
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCorrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $('.counter').text(usCorrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCorrentFloor}]`).toggleClass('current-floor');
    }
  });
});
