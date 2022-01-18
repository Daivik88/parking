canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_height=100
car_width=75

background_image = "parkingLot.jpg";
car_image = "car2.png";

car_x=5
car_y=225

function add() {
	background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    car_imgtag=new Image();
    car_imgtag.onload=uploadcar;
    car_imgtag.src=car_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);

}

function uploadcar() {
	ctx.drawImage(car_imgtag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y>=0){
		car_y=car_y-10;
		console.log("when up Key Is Pressed x="+ car_x +"y="+car_y);
		uploadBackground();
		uploadcar();
	}
}

function down()
{
	if (car_y<=350){
		car_y=car_y+10;
		console.log("when up Key Is Pressed x="+ car_x +"y="+car_y);
		uploadBackground();
		uploadcar();
	}
}

function left()
{
	if (car_x>=0){
		car_x=car_x-10;
		console.log("when up Key Is Pressed x="+ car_x +"y="+car_y);
		uploadBackground();
		uploadcar();
	}
}

function right()
{
	if (car_x<=760){
		car_x=car_x+10;
		console.log("when up Key Is Pressed x="+ car_x +"y="+car_y);
		uploadBackground();
		uploadcar();
	}
}
