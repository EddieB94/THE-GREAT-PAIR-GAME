import "./style.css";

window.openedSquare = [];
//var keywordImage = keywordPrompt();
var model = document.querySelector(".popup");
var finalTime = "";
var finalMoves = "";
var gameBoard = document.body.querySelector("#gameBoard");
let gridWidth = 4;

var noSquares = Math.pow(gridWidth, 2);
var levels = [{

},
{

}, 
{

}]

var levelOne = new Object();
var levelTwo = new Object();
var levelThree = new Object();
var moves = 0;
var bestMoves = document.querySelector('#bestMoves').innerHTML;
var bestTime = document.querySelector('.bestTime').innerHTML;
var counter = document.body.querySelector(".moves");
var square = [];//gameBoard.querySelectorAll("div");
var squares = [];
const deck = document.querySelector("#squareImageGallery");
var restartBtn = document.querySelector("#restartBtn");
// var imageBtn = document.querySelector("#imageBtn");
window.matchedSquares = [];
window.imageGallery = [];


const wrapper = document.body;

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  var action = event.target.dataset.action;
  if (!isButton) {
    return;
  }
 switch(action){
	case "close":
		closeOverlay();
	break;

	case "restart":
		restartGame();
	break;
	};
})



















function closeOverlay() {
	document.querySelector('body').classList.remove('complete');
}

function matched(){
	//what happens when a pair is matched
	for(i = 0; i<2;i++){
		var i = i;
		openedSquare[i].classList.add("disabled");
	}
	openedSquare = [];
};

function unmatched(){
	//what happens when a pair guess is incorrect
	requestAnimationFrame(function(){
		openedSquare[0].classList.add("hidden");
	    openedSquare[1].classList.add("hidden");
	    openedSquare = [];
	});
};

function restartMoves(){
	var counter = document.body.querySelector(".moves");
	moves =0;
	counter.innerHTML = moves;
};

//timer
var second = 0;
var minute = 0;
var hour = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer(){
	var timer = document.querySelector(".timer");
	interval = setInterval(function(){
		timer.innerHTML = minute+"mins " + second + "secs";
		second++;
		if(second == 60){
			minute++;
			second=0;
		}
		if(minute == 60){
			hour++;
			minute=0;
		}
	},1000);
}

function restartTimer(){
	var timer = document.querySelector(".timer");
	second=0;
	minute=0;
	hour=0;
	timer.innerHTML = "0mins 0secs";
	clearInterval(interval);
};

function playAgain(){
	restartMoves();
	restartTimer();
};

function gameWon(){
		document.body.classList.add("complete");
		model.classList.add("show");
		clearInterval(interval);
		finalTime = timer.innerHTML;
		finalMoves = moves;
		if (finalMoves < bestMoves){
			bestMoves = finalMoves;
			document.querySelector("#bestMoves").innerHTML = finalMoves;
		}
		bestTime = finalTime;
		document.querySelector(".bestTime").innerHTML = finalTime;
}

function restartGame(){
	restartMoves();
	restartTimer();
	document.body.classList.remove("complete");
	openedSquare = [];
	matchedSquares = [];
	imageGallery = [];
	square = [];
	squares = [];
	startGame();
};

// function keywordPrompt(){
// 	prompt("what images would you like to use?");
// 	restartGame();
// }

function openSquare(){
	if(this.classList.contains("hidden")){
		openedSquare.push(this);
		this.classList.remove("hidden");
		var len = openedSquare.length;
		if(len === 2){
			//count attempts on guess attempt
			moves++;
			counter.innerHTML = moves;
			if(moves == 1){
				startTimer();
			}
			if(openedSquare[0].style.backgroundImage == openedSquare[1].style.backgroundImage){
				matchedSquares.push(this);
				matched();
				if(matchedSquares.length === noSquares/2){
					matchedSquares = [];
					gameWon();
				}
			} else{
				unmatched();
			}
		};
	};
};

	// get 50 images
	function imageGenerator(){
		for(i=0;i<noSquares/2;i++){
			var i = i;
			imageGallery.push("https://picsum.photos/id/"+(i+400)+"/300/300");
		};
	}

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


function startGame() {
model.classList.remove("show");
	openedSquare = [];
	matchedSquares = [];
	imageGallery = [];
	square = [];
	squares = [];
imageGenerator();
var c = 0;

//generate gameBoard
	for(i = 0; i < noSquares; i++){
  		var i = i;

  		if(c === Math.ceil(noSquares/2)-1){
  			c = 0;
  		}	else {
  			c++;
  		}



  		var newSquare = "<div class='generatedSquare' type="+c+" style='background-image: url("+imageGallery[c]+")'></div>";
  		square.push(newSquare);
	}

	//shuffle square array
	var shuffled = shuffle(square);
	var output = "";

	for(i=0;i < shuffled.length;i++){
 		if (i%gridWidth === 0){
 			output += "<div class='clearFix'></div>"
  		}
		output += shuffled[i];
	}
	
	gameBoard.innerHTML = output;
	document.documentElement.style.setProperty('--width', Math.floor((100-((0.5*2)*gridWidth))/gridWidth)  + "%");
	document.documentElement.style.setProperty('--padding-bottom', Math.floor((100-((0.5*2)*gridWidth))/gridWidth)  + "%");
	squares = gameBoard.querySelectorAll(".generatedSquare");

	for(i = 0; i < noSquares; i++){
	// 	//add image/icon
	// 	square[i].style.backgroundImage = "url("+imageGallery[Math.floor(i / 2)]+")";
		squares[i].classList.add('square');
		squares[i].classList.add('hidden');
		squares[i].classList.remove('disabled');
	}

	
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
	  	
	

	// restartBtn.addEventListener('click', restartGame);
	//imageBtn.addEventListener('click', keywordPrompt);

  return gameBoard;
};

document.body.appendChild(startGame());