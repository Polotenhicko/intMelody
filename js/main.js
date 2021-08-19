$(document).ready(function () {
  let currentFloor = 2;
  const counterUp = $('.counter-up');
  const counterDown = $('.counter-down');
  const floorPath = $('.home-img path');
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
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
