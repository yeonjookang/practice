$(document).ready(function(){
	draw();

	/*keydown,keyup 이벤트가 실행되면 각각의 이벤트핸들러 발생*/
	$("document").on("keydown",keyDownHandler);
	$("document").on("keyup",keyUpHandler);
});
	/* 공의 정보 */
	var dx=5;
	var dy=5;
	var ballX=200;
	var ballY=200;
	var ballRadius=20;

	/* 바의 정보 */
	var paddleH=20;
	var paddleW=100;
	var canvas=document.getElementById("myCanvas");
	var paddleX=(canvas.width-paddleW)/2;

	/* 키 컨트롤 정보 */
	var rightPressed=false;
	var leftPressed=false;

	function draw(){
		var context=canvas.getContext("2d");

		context.clearRect(0,0,400,400);
		drawPaddle();

		context.beginPath();
		context.arc(ballX,ballY,20,0,2.0*Math.PI,false);
		context.fillStyle="gray";
		context.fill();
		context.closePath();

		ballX=dx+ballX;
		ballY=dy+ballY;

		if(ballX>=380)
			dx=-dx;
		if(ballY>=380)
			dy=-dy;
		if(ballX<=20)
			dx=-dx;
		if(ballY<=20)
			dy=-dy;
	}

	/*키가 눌러졌을 때*/
	function keyDownHandler(event) {
		if(event.keyCode==39)
			rightPressed=true;
		else if(event.keyCode==37)
			leftPressed=true;
	}
	/*키가 떼어졌을 때*/
	function keyUpHandler(event) {
		if(event.keyCode==39)
			rightPressed=false;
		else if(event.keyCode==37)
			leftPressed=false;
	}

	var ball=setInterval(draw,10);

	function drawPaddle(){
		context.beginPath();
		context.fillStyle="pink";
		context.rect(paddleX,canvas.height-paddleH,paddleW,paddleH);
		context.fill();
		context.closePath();

		if(rightPressed)
			paddleX+=7;
		else if(leftPressed)
			paddleX-=7;
	}


