
// load image file

var ripples = [];
var spriteCubeFaces = new Image();

function loadBackgroundImage(cb){
	for ( var idx = 0 ; idx < 6 ; idx++){
		ripples[idx] = new Image();
		ripples[idx].onload = ldd;
		ripples[idx].src = "./rippleBW/rippleBW0000" + (idx) + ".png";
		// 1,2,...6
	}
	spriteCubeFaces.onload = ldd;
	spriteCubeFaces.src = "./spriteCubeFacesMap.png";
	var cnt = 0;
	function ldd(){
		cnt++;
		if ( cnt == 7 ) cb();
	}
}


// fullscreen quad for background image
var fsQuad = data.getFullscreenQuad();

// full width/height of an image
// origin(0,0) top left
var fsTexQuad  = [
	0 , 1 , // bottom left
	1 , 1 , // bottom right
	1 , 0 , // top right

	0 , 1 , // bottom left
	1 , 0 , // top right
	0 , 0 , // top left
];

for(var idx = 0; idx < 12; idx++){
	fsQuad[idx] *= 0.7;
}

var cubeFaces = [ // FRONT
	0 , 1 , // 0
	1 , 1 , // 1
	1 , 0 , // 2

	0 , 1 , // 0
	1 , 0 , // 2
	0 , 0 , // 3
		// BACK
	1 , 1 , // 4
	1 , 0 , // 7
	2 , 0 , // 6

	1 , 1 , // 4
	2 , 0 , // 6
	2 , 1 , // 5
		// RIGHT
	0 , 2 , // 1
	1 , 2 , // 5
	1 , 1 , // 6

	0 , 2 , // 1
	1 , 1 , // 6
	0 , 1 , // 2
		// LEFT
	1 , 2 , // 0
	1 , 1 , // 3
	2 , 1 , // 7

	1 , 2 , // 0
	2 , 1 , // 7
	2 , 2 , // 4
		// BOTTOM
	0 , 3 , // 0
	0 , 2 , // 4
	1 , 2 , // 5

	0 , 3 , // 0
	1 , 2 , // 5
	1 , 3 , // 1
		// TOP
	1 , 3 , // 3
	2 , 3 , // 2
	2 , 2 , // 6

	1 , 3 , // 3
	2 , 2 , // 6
	1 , 2 , // 7
];
var len = cubeFaces.length;
for(var idx = 0; idx < len ; idx++ ){
	cubeFaces[idx] /= 3;
}
