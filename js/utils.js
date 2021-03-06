'use strict';

window.utils = (function () {
  var KEY_NAME_ESC = 'Escape';
  var KEY_NAME_ENTER = 'Enter';

  function getRandomNumber(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function getShuffledArray(array) {
    var shuffledArray = array.slice();
    var length = shuffledArray.length;
    var randomIndex;
    var temp;
    while (length) {
      randomIndex = Math.floor(Math.random() * length--);
      temp = shuffledArray[length];
      shuffledArray[length] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temp;
    }

    return shuffledArray;
  }

  function isEscEvent(evt, action) {
    if (evt.key === KEY_NAME_ESC) {
      action();
    }
  }

  function isEnterEvent(evt, action) {
    if (evt.key === KEY_NAME_ENTER) {
      action();
    }
  }
  return {
    getRandomNumber: getRandomNumber,
    getShuffledArray: getShuffledArray,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
  };
})();
