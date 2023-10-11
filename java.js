canvas=document.getElementById("n");
ctx=canvas.getContext("2d");
Rover_width=150;
Rover_heigth=150;
Rover_imagen="si.jpg";
Rover_PNG="rover.png";
Rover_x=200;
Rover_y=200;
function add(){
    background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = Rover_imagen

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = Rover_PNG
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.heigth);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,Rover_x,Rover_y,Rover_width,Rover_heigth);
}

window.addEventListener("keydown", m);
function m(a){
s=a.keyCode;
console.log(a);
if(s=="40"){
	w();
	console.log("abajo")
}

if(s=="38"){
	q();
	console.log("arriba")
}

if(s=="37"){
	p();
	console.log("izquierda")
}

if(s=="39"){
	e();
	console.log("derecha")
}
}

function w(){
	if(Rover_y<=500){
		Rover_y=Rover_y+10;
		uploadBackground();
		uploadrover();
	}
}

function q(){
	if(Rover_y>=0){
		Rover_y=Rover_y-10;
		uploadBackground();
		uploadrover();
	}
}

function p(){
	if(Rover_x>=0){
		Rover_x=Rover_x-10;
		uploadBackground();
		uploadrover();
	}
}

function e(){
	if(Rover_x<=500){
		Rover_x=Rover_x+10;
		uploadBackground();
		uploadrover();
	}
}