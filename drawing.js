function rect(context, x, y, w, h) {


	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x + w, y);
	context.lineTo(x + w, y + h);
	context.lineTo(x, y + h);
	context.lineWidth=3;
	context.strokeStyle='black';
	context.closePath();
	context.stroke();
};

paint= false;

function thing (e) {
  
var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
if (paint) {
rect (context, mouseX, mouseY, 1, 1);
}		
  
  //addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  
};


function track (e) {
paint=true;
console.log('track');
};