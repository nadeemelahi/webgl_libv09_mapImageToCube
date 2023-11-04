// author: Ned - Nadeem Elahi nadeem@webscripts.biz

data.psvFactor = 1;
data.set_scaleXYZ(0.2);

// Background Image - requires web server
loadBackgroundImage( bgReady );
//drawFrame(); // un-comment if not loading background image
var dim2d = 2, dim3d = 3;
var dataTxWidth = 2, dataTxHeight = 2;

function bgReady(){ 
	// background image

	for( var idx = 0; idx < 6; idx++ ){
		ngl.createImgTexture( idx ); 
	}

	ngl.createImgTexture( 6 );  // cubeFacesMap

	drawFrame();
}


var frame = 0; 
function drawBackgroundImage(){
	// 2D - 6 verts - requires web server
	ngl.setShaderProgByIndex( 0 );
	
	ngl.loadImageTexture(ripples[frame], "imgRipple" , frame , 0); // gl.TEXTURE0 - just 1 image 
	frame++;
	if(frame > 5) frame = 0;

	ngl.loadAttribute(fsQuad, "fsQuad", dim2d);
	ngl.loadAttribute(fsTexQuad, "fsTexQuad", dim2d);

	ngl.draw(0,6);
}


function draw_verts_colours(){
	// 3D - 3 verts
	ngl.setShaderProgByIndex( 2 );
	
	data.load_tsrp();

	ngl.loadAttribute(verts, "vert", dim3d);
	ngl.loadAttribute(colours, "colour", dim3d);

	ngl.draw(0,vertsCnt);
}



function draw_verts_cubeFaces(){
	// 3D - 3 verts
	ngl.setShaderProgByIndex( 3 );
	
	data.load_tsrp();

	ngl.loadImageTexture(spriteCubeFaces, "img" , frame , 0); // gl.TEXTURE0 - just 1 image 
	ngl.loadAttribute(cubeFaces, "cubeFacesMap", dim2d);
	ngl.loadAttribute(verts, "vert", dim3d);

	ngl.draw(0,vertsCnt);
}

var dim , vertCnt ;
function drawFrame(){

	ngl.clear();

	drawBackgroundImage(); // requires web server
	
	//draw_verts_colours();
	
	draw_verts_cubeFaces();
	
	animateXYrotation();
}

var speed = 100;
function animateXYrotation(){
	data.xAngle++; data.yAngle++;
	if(data.xAngle > 360) data.xAngle = 0;
	if(data.yAngle > 360) data.yAngle = 0;
	//ngl.setShaderProgByIndex( 1 ); // already set to 1 since was set lastly in drawFram()
	data.load_tsrp();

	setTimeout(drawFrame, speed);
}
