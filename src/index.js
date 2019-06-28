import "./style.css";
//import game from "./gameConfig.js";
import {
	shuffle,
	checkMedia,
} from "./methods.js";

export {
	openSquare,
};

var game = require( "./gameConfig.js" );
var openedSquare = [];
var matchedSquares = [];
var imageGallery = [];
var square = [];//gameBoard.querySelectorAll("div");
var squares = [];
var interval;
var finalTime = "";
var finalMoves = "";
var model = document.querySelector(".popup");
var gameBoard = document.body.querySelector("#gameBoard");
var currentLevel = "currentLevel"; //game.state.currentLevel;
let easyLevel =  1;//game.levels.one.id;
let gridWidth = game.levels.one.gridWidth;
var targetMoves = document.querySelector('#targetMoves').innerHTML;
var targetTime = document.querySelector('#targetTime').innerHTML;
const deck = document.querySelector("#squareImageGallery");
var restartBtn = document.querySelector("#restartBtn");
//timer
var second = 0;
var minute = 0;
var hour = 0;
var timer = document.querySelector(".timer");
var moves = 0;
var counter = document.body.querySelector(".moves");
var noSquares = Math.pow(gridWidth, 2);
const wrapper = document.body;
var docStyleVar = document.documentElement.style;

//add click events to all buttons
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

//set levelstates
//on level complete go to next level

function closeOverlay() {
	document.querySelector('body').classList.remove('complete');
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
		if (finalMoves < targetMoves){
			//targetMoves = finalMoves;
			//document.querySelector("#targetMoves").innerHTML = finalMoves;
		}
		if (finalTime < targetTime){
			//targetTime = finalTime;
			//document.querySelector(".targetTime").innerHTML = finalTime;
		}
}

function restartGame(){
	restartMoves();
	restartTimer();
	document.body.classList.remove("complete");
	emptyArrays();
	startGame();
};

//empty arrays
function emptyArrays(){
	openedSquare = [];
	matchedSquares = [];
	imageGallery = [];
	square = [];
	squares = [];
}

function restartMoves(){
	var counter = document.body.querySelector(".moves");
	moves =0;
	counter.innerHTML = moves;
};

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

function matched(){
	//what happens when a pair is matched
	for(i = 0; i<2;i++){
		var i = i;
		openedSquare[i].classList.add("disabled");
	};
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

function startGame() {
	//localStorage.setItem("currentLevel", game.levels[easyLevel]);
	model.classList.remove("show");
	emptyArrays();
	imageGenerator();
	var c = 0;
	//generate and shuffle gameBoard
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
	};
	gameBoard.innerHTML = output;
	docStyleVar.setProperty('--width', Math.floor((100-((0.5*2)*gridWidth))/gridWidth)  + "%");
	docStyleVar.setProperty('--padding-bottom', Math.floor((100-((0.5*2)*gridWidth))/gridWidth)  + "%");
	squares = gameBoard.querySelectorAll(".generatedSquare");

	for(i = 0; i < noSquares; i++){
			squares[i].classList.add("square");
			squares[i].classList.add("hidden");
			squares[i].classList.remove("disabled");
	};
	//check if iphone or ipad or not, and add touch or click events respectively
	checkMedia();
		return gameBoard;
};

document.body.appendChild(startGame());