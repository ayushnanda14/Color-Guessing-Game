var colorsLength = 6;
var colors = generateRandomColors(colorsLength);
var squares = document.querySelectorAll(".square");
var pickedColor = chooseRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var newColors = document.querySelector("#newColors");

colorDisplay.textContent = pickedColor.toUpperCase();

for(i=6;i<9;i++){
	squares[i].style.display = "none";
}
init();

function init(){
	
	setupModeButtons();

	setupSquares();
	
	reset();
}



newColors.addEventListener("click", function(){
	reset();
});

function setupModeButtons(){
	for(i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			
			this.classList.add("selected");
			this.textContent === "Easy" ? colorsLength = 3 : this.textContent === "Medium" ? colorsLength = 6 : colorsLength = 9;
			
			reset();
		});

	}
}

function setupSquares(){
	for(var i=0;i<squares.length;i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				newColors.textContent = "Play Again?";
			}
			
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});

	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(colorsLength);
	//pick a new random color
	pickedColor = chooseRandomColor();
	//change colors of the square
	for(i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#016064";
	messageDisplay.textContent = "";
	newColors.textContent = "New Colors";
}


function changeColors(color){
	// all squares will change their color to match 
	for(var i= 0; i<colors.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function chooseRandomColor(){
	rand = Math.round(Math.random() * (colors.length -1 ))
	return colors[rand] 
}

function generateRandomColors(num){
	arr = []
	for(i=0;i<num;i++){
		arr[i] = randomColor()
	}
	return arr
}

function randomColor(){
	red = Math.floor(Math.random()*256)
	green = Math.floor(Math.random()*256)
	blue = Math.floor(Math.random()*256)

	return "rgb("+red+", "+green+", "+blue+")"

}
