addEventListener('load', initiate);
var canvas;

function initiate (){
	
	var elem=document.getElementById('canvas');
	 canvas=elem.getContext('2d');
     draw();
	 addEventListener('mousemove', animation);
	 
	 
}

	function animation(e){
	draw();
    canvas.clearRect(0, 0, 921, 683);
     	
	 bear(e);	 
	animation_move(e);
	
		
}

function animation_move(e){
	var img=new Image();
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	img.src='media/img/losos.png';
	canvas.drawImage(img, xmouse, ymouse);
	canvas.beginPath();
	/*canvas.arc(xmouse, ymouse, 10, 0, Math.PI*2, false);*/

}

	
function obstacle(x, y, w, h) {
    canvas.fillStyle='#99753d';
	canvas.strokeStyle='#99753d';
    canvas.fillRect (x, y, w, h);
}

function bear (e){
	var img=new Image();
	img.src='media/img/bear.png';
	canvas.drawImage(img, 320, 180);
	
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	var xeyel=414;
	var yeyel=230;
	var ang=Math.atan2(ymouse - yeyel, xmouse - xeyel);
	//console.log(ang);
	var x= xeyel + Math.round(Math.cos(ang)*2);
	var y=yeyel + Math.round(Math.sin(ang)*2);
	canvas.beginPath();
	canvas.arc(xeyel, yeyel, 4, 0, Math.PI*2, false);
	canvas.moveTo(xeyel + 70, yeyel);
	canvas.arc(xeyel + 18, yeyel+8, 4, 0, Math.PI*2, false);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke;

	canvas.beginPath();
	canvas.moveTo(x+10, y);
	canvas.arc(x, y, 2, 0, Math.PI*2, false);
	canvas.moveTo(x + 60, y);
	canvas.arc(x+ 18, y+8, 2, 0, Math.PI*2, false);
	canvas.fillStyle='black';
	canvas.fill();

	function objects(){
	var img=new Image();
	img.src='media/img/toxic.png';
	canvas.drawImage(img, 720, 580);
    canvas.beginPath();

	}

}

function test (){
	canvas.font='bold 24px verdana, sans-serif';
	canvas.textAlign='start';
	canvas.fillText("Bear Killer", 100, 100);
	var text="Игра Лосось"
	var size=canvas.measureText(text);
	canvas.fillText('Игра Лосось', 100, 124);
	canvas.strokeRect(100, 100, size.width, 24);
	canvas.shadowColor='rgba(0,0,0,0.5)';
	canvas.shadowOffset=4;
	canvas.shadowOffset=5;
	canvas.shadowBlur=5;
	
}

        var 

        x = 680, y = 500;
		
        

        function draw() {
			 
			 
			
			var img=new Image();
			    img.src='media/img/toxic.png';
			    canvas.drawImage(img, x, y);
				canvas.beginPath();
				
			
            x += -0.15;
			
            //canvas.fillStyle = "rgba(34,45,23,0.4)";
            //canvas.fillRect(0, 0, can.width, can.height);
            requestAnimationFrame(draw);
           
			if (x < 0 ) {
				x = 680;
			}
			
		}
			
		
       
	
	/*canvas.fillRect(450, 390, 120, 30);
	canvas.fillRect(470, 380, 15, 12);
	canvas.fillRect(540, 420, 15, 15);
	
	canvas.fillRect(100, 390, 120, 30);
	
	canvas.beginPath();
	canvas.moveTo(120, 420);
	canvas.lineTo(110, 430);
	canvas.lineTo(110, 420);
	canvas.fill();
	canvas.closePath();
	
	canvas.beginPath();
	canvas.moveTo(160, 420);
	canvas.lineTo(165, 430);
	canvas.lineTo(175, 420);
	canvas.fill();
	canvas.closePath();
	
	canvas.beginPath();
canvas.moveTo(90, 700);
canvas.quadraticCurveTo(180, 300, 200, 700);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.moveTo(550, 700);
canvas.quadraticCurveTo(630, 350, 750, 700);
canvas.fill();
canvas.stroke();

   canvas.beginPath();
	canvas.moveTo(120, 420);
	canvas.lineTo(110, 430);
	canvas.lineTo(110, 420);
	canvas.fill();
	canvas.closePath();
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(160, 420);
	canvas.lineTo(165, 430);
	canvas.lineTo(175, 420);
	canvas.fill();
	canvas.closePath();*/
				





