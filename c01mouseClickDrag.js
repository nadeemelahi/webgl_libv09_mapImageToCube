// author: nadeem@webscripts.biz
// DEPENDS matTSR{}

new function(){
	var isDragging = false,
		pvmx , pvmy, // pv -previous  mx -mouse x location 
		rotdamp = 10 ; // scale down the amount of rotation 

	function mouseDown(e){ 
		isDragging = true; 
		pvmx = e.clientX ;
		pvmy = e.clientY ;
	}
	function mouseMove(e){
		if(!isDragging) return;
		// dragging on x should rotate y and vice versa
		data.yAngle += (e.clientX - pvmx) / rotdamp;
		data.xAngle += (e.clientY - pvmy) / rotdamp;
	}
	function mouseUp(e){ isDragging = false; }

	// fullscreen canvas so window.clientX = canvas.clientX
	window.addEventListener("mousedown", mouseDown, false);
	window.addEventListener("mouseup", mouseUp, false);
	window.addEventListener("mouseout", mouseUp, false);
	window.addEventListener("mousemove", mouseMove, false);
};
