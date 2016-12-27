addEventListener('load', initiate);
var canvas, clear, empty;
<<<<<<< HEAD
var max = 683, min = 330, right = 921, d=600, e=600, o=0;
var cross=[]; boxxx=[]; boyyy = [];
var count=5;
var food= false, collide = false;
var losos='media/img/losos.png', bear1='media/img/bear.png', toxic='media/img/toxic.png';




					function initiate (){

						 empty = document.getElementById('count');

						clear=document.getElementById('clear');
						clear.addEventListener('click', clearAll);

						
						
						var elem=document.getElementById('canvas');
						 canvas=elem.getContext('2d');

						 addEventListener('mousemove', animation);
					     //draw(680, 500, 3);
					     //draw(550, 600, 2);
					     draw ([680, 550], [500, 600], [3, 2]);
					     plankton();
					    }

					    function clearAll(){
					    	sessionStorage.clear();
					    	count=5;
					    	show();
					    }

					    function show(){

					    	console.log('empty');

					    	empty.innerHTML = count;

					    }




					function animation(e){
					 canvas.clearRect(0, 0, 921, 683);
				     bear(e);	 
					animation_move(e);
					}



					function animation_move(e){
						var img = new Image();
						var xmouse=e.clientX;
						var ymouse=e.clientY;
						var width = cross[0] + 10;
						var height = cross[1] + 5;

						
						if (xmouse > right-80) {
						    xmouse= right-80
						}

						if (ymouse < min) {
							ymouse=min
						};
						if (ymouse > max-30){
							ymouse=max-30
						}

						if ((xmouse + 100 >= cross[0]) && (xmouse <= cross[0] + 10)) {
							 var db=true;

						} 

					    if ((ymouse + 27 >= cross[1]) && (ymouse <= cross[1] + 5)) {
					    	 var nx=true;
					    }



						if (db==true && nx==true) {
							food=true;
							sessionStorage.setItem('count', Number(count)+1);
							//alert(count);
						count = sessionStorage['count'];

						show();
						
						
					
						}

						for (a=0; a < boxxx.length; a++) {

						if ((xmouse + 100 >= boxxx[a]) && (xmouse <= boxxx[a] + 100)) {
							
							 var box=true;


						} 

					    if ((ymouse + 27 >= boyyy[a]) && (ymouse <= boyyy[a] + 27)) {
					    	 
					    	 var boxw=true;
					    }

					     if (box==true && boxw==true) {
					     	console.log(count);
					    	sessionStorage.setItem('count', Number(count)-1);
					    	count = sessionStorage['count'];
					    	show();
					    }

					}

					   

					    /*{
							collide=true;
							sessionStorage.setItem('count', Number(count)-1);
							//alert(count);
						count = sessionStorage['count'];

						show();
					}*/

						

						



						
						img.src=losos;
						canvas.drawImage(img, xmouse, ymouse);
						
						canvas.beginPath();
						

					}

	

					function bear (e){
						var img = new Image();
						img.src=bear1;
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
					}

 

						function selfRandom(min, max)
						{
						  return Math.floor(Math.random() * (max - min + 1)) + min;
						}


							function draw (x1=[], y1=[], u=[]){
								
								for (var i = 0; i < x1.length; i++){
									var img = new Image();
						        img.src=toxic;
						        
									canvas.clearRect(x1[i], y1[i], 150, 65);
									animation_move(e);
									canvas.drawImage(img, x1[i], y1[i]);
									canvas.beginPath();
									x1[i] += -u[i];
									
									if (x1[i] < -100){
										x1[i] = 680;
										y1[i] = selfRandom(350, 683);
									}
									boxxx[i] = x1[i];
									boyyy = y1[i];
								}


									requestAnimationFrame(function(){
										draw(x1, y1, u);
									});

									}
										
	
		
						function plankton() {
							console.log (food);
				canvas.clearRect (d, e, 10, 5);
				
				canvas.fillStyle='black';
				canvas.fillRect(d, e, 5, 5);
				canvas.fill
				canvas.beginPath();
				d += -3.2;
				if (food == false){

				
				requestAnimationFrame(plankton);
				if (d < -100) {
					d=700; e=selfRandom(350, 683);
				            }
				 cross[0] = d;
				 cross[1] = e;
				}

				 else {
				 	food = false;

				 	requestAnimationFrame(plankton);
					d=700; e=selfRandom(350, 683);
				            
				 cross[0] = d;
				 cross[1] = e;
				 
				
				 

				        }
				    }

       
	
=======
var max = 683, min = 330, right = 921,  d = 600, e = 600, o = 0;
var img = new Image();
img.src = 'media/img/toxic.png';
var cross = [];
var count = 5;
var food = false;


function initiate() {
    empty = document.getElementById('count');
    clear = document.getElementById('clear');
    clear.addEventListener('click', clearAll);
    var elem = document.getElementById('canvas');
    canvas = elem.getContext('2d');
    addEventListener('mousemove', animation);
    draw_r(680,500, 2.2);
    draw_r(520,400, 1);
    plankton();
}

function clearAll() {
    sessionStorage.clear();
    count = 5;
    show();
}

function show() {
    console.log('empty');
    empty.innerHTML = count;
}


function animation(e) {
    canvas.clearRect(0, 0, 921, 683);
    bear(e);
    animation_move(e);
}


function animation_move(e) {
    var img = new Image();
    var xmouse = e.clientX;
    var ymouse = e.clientY;
    var width = cross[0] + 10;
    var height = cross[1] + 5;


    if (xmouse > right - 80) {
        xmouse = right - 80
    }

    if (ymouse < min) {
        ymouse = min
    }
    if (ymouse > max - 30) {
        ymouse = max - 30
    }

    if ((xmouse + 100 >= cross[0]) && (xmouse <= cross[0] + 10)) {
        var db = true;

    }

    if ((ymouse + 27 >= cross[1]) && (ymouse <= cross[1] + 5)) {
        var nx = true;
    }


    if (db == true && nx == true) {
        food = true;
        sessionStorage.setItem('count', Number(count) + 1);
        //alert(count);
        count = sessionStorage['count'];

        show();


    }
    //else food=false;


    img.src = 'media/img/losos.png';
    canvas.drawImage(img, xmouse, ymouse);

    canvas.beginPath();
    /*canvas.arc(xmouse, ymouse, 10, 0, Mxxth.PI*2, false);*/

}


function bear(e) {
    var img = new Image();
    img.src = 'media/img/bear.png';
    canvas.drawImage(img, 320, 180);
    var xmouse = e.clientX;
    var ymouse = e.clientY;
    var xeyel = 414;
    var yeyel = 230;
    var ang = Math.atan2(ymouse - yeyel, xmouse - xeyel);
    //console.log(ang);
    var x = xeyel + Math.round(Math.cos(ang) * 2);
    var y = yeyel + Math.round(Math.sin(ang) * 2);
    canvas.beginPath();
    canvas.arc(xeyel, yeyel, 4, 0, Math.PI * 2, false);
    canvas.moveTo(xeyel + 70, yeyel);
    canvas.arc(xeyel + 18, yeyel + 8, 4, 0, Math.PI * 2, false);
    canvas.fillStyle = 'white';
    canvas.fill();
    canvas.stroke;
    canvas.beginPath();
    canvas.moveTo(x + 10, y);
    canvas.arc(x, y, 2, 0, Math.PI * 2, false);
    canvas.moveTo(x + 60, y);
    canvas.arc(x + 18, y + 8, 2, 0, Math.PI * 2, false);
    canvas.fillStyle = 'black';
    canvas.fill();
}


function selfRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 

function draw_r(xx=null, yy=null, u=null) {
    canvas.clearRect(xx, yy, 150, 65);
    animation_move(e);
    canvas.drawImage(img, xx, yy);
    canvas.beginPath();
    xx += -u;
    requestAnimationFrame(function(){
	 draw_r(xx,yy,u);
	});
    if (xx < -100) {
        xx = 680;
        yy = selfRandom(350, 683);
    }
	cross[2] = xx;
    cross[3] = yy;
}


function plankton() {
    console.log(food);
    canvas.clearRect(d, e, 10, 5);
    canvas.fillStyle = 'black';
    canvas.fillRect(d, e, 5, 5);
    canvas.fill;
    canvas.beginPath();
    d += -3.2;
	requestAnimationFrame(plankton);
    if (food == false) {
        if (d < -100) {
            d = 700;
            e = selfRandom(350, 683);
        }
        cross[0] = d;
        cross[1] = e;
    }

    else {
        food = false;
        d = 700;
        e = selfRandom(350, 683);

        cross[0] = d;
        cross[1] = e;


    }
}
>>>>>>> 1aa93a961ec2b24fae92fcc55d5d94868283034f
