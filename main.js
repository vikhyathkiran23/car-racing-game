var Canvas = document.getElementById("myCanvas");
var Context = Canvas.getContext("2d");

var Car_1_width = 120;
var Car_1_height = 70;
var Car_1_image = "White_Car.png";
var Car_1_x = 10;
var Car_1_y = 10;

var Car_2_width = 120;
var Car_2_height = 70;
var Car_2_image = "Green_Car.png";
var Car_2_x = 10;
var Car_2_y = 100;



background_image = "Race-track-canvas.jpg";

function add() {
    background_imagetag=new Image();
    background_imagetag.onload=upload_background;
    background_imagetag.src=background_image;

    Car_1_image_tag=new Image();
    Car_1_image_tag.onload=upload_car_1;
    Car_1_image_tag.src=Car_1_image;

    Car_2_image_tag=new Image();
    Car_2_image_tag.onload=upload_car_2;
    Car_2_image_tag.src=Car_2_image;
}

function upload_background() {
    Context.drawImage(background_imagetag, 0, 0, Canvas.width, Canvas.height);
}

function upload_car_1() {
    Context.drawImage(Car_1_image_tag, Car_1_x, Car_1_y, Car_1_width, Car_1_height);
}

function upload_car_2() {
    Context.drawImage(Car_2_image_tag, Car_2_x, Car_2_y, Car_2_width, Car_2_height);
}


window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
    keypressed=e.keyCode;
    console.log(keypressed)
    if (keypressed==38){
        car_1_up();
        console.log("up arrow key");
    }
    if(keypressed==40){
        car_1_down();
        console.log("down arrow key")
    }
    if(keypressed==37){
        car_1_left();
        console.log("left arrow key")
    }
    if(keypressed==39){
        car_1_right();
        console.log("right arrow key");
    }
    if (keypressed==87) {
        car_2_up();
        console.log("w key pressed")        
    }
    if (keypressed==65) {
        car_2_left();
        console.log("a key pressed")        
    }
    if (keypressed==83) {
        car_2_down();
        console.log("s key pressed")        
    }
    if (keypressed==68) {
        car_2_right();
        console.log("d key pressed")        
    }
    if (Car_1_x>700) {
        console.log("car 1 Won") 
        document.getElementById("Game_Status").innerHTML="White Car has Won!!"    
    }
    if (Car_2_x>700) {
        console.log("car 2 Won")    
        document.getElementById("Game_Status").innerHTML="Green car has Won!!!"
    }

}
function car_1_up() {
    if(Car_1_y>=0){
        Car_1_y=Car_1_y-10;
        upload_background();
        upload_car_1();
        upload_car_2();

    }
}

function car_1_down() {
    if(Car_1_y<=500){
        Car_1_y=Car_1_y+10;
        upload_background();
        upload_car_1();
        upload_car_2();

    }
}

function car_1_left() {
    if(Car_1_x>=0){
        Car_1_x=Car_1_x-10;
        upload_background();
        upload_car_1();
        upload_car_2();

    }
}

function car_1_right() {
    if(Car_1_x<=700){
        Car_1_x=Car_1_x+10;
        upload_background();
        upload_car_1();
        upload_car_2();

    }
}

function car_2_up() {
    if(Car_2_y>=0){
        Car_2_y=Car_2_y-10;
        upload_background();
        upload_car_2();
        upload_car_1();

    }
}

function car_2_down() {
    if(Car_2_y<=500){
        Car_2_y=Car_2_y+10;
        upload_background();
        upload_car_2();
        upload_car_1();

    }
}

function car_2_left() {
    if(Car_2_x>=0){
        Car_2_x=Car_2_x-10;
        upload_background();
        upload_car_2();
        upload_car_1();

    }
}

function car_2_right() {
    if(Car_2_x<=700){
        Car_2_x=Car_2_x+10;
        upload_background();
        upload_car_2();
        upload_car_1();

    }
}
