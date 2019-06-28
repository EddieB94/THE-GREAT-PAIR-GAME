import {
	openSquare,
} from "./index.js";

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

function checkMedia() {
	  if(/iP(hone|ad)/.test(window.navigator.userAgent)) {
	    var elements = document.querySelectorAll('.square');
	    
	    for(var i = 0; i < elements.length; i++) {
	      elements[i].addEventListener('touchstart', openSquare);
	    }
	  } else {
	  	var elements = document.querySelectorAll('.square');
	  	for(var i = 0; i < elements.length; i++) {
		  	elements[i].addEventListener('click', openSquare);
	  	}
	  }
}

export {
	shuffle,
	checkMedia,
}