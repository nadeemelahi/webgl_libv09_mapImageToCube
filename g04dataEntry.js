// author: Ned - Nadeem Elahi nadeem@webscripts.biz

// verts - triangle points
//
//     7       6              
//     +-------+ 
//
//  3       2
//  +-------+ 1,1
//  |       |
//  |   4   |  5
//  |  +----|--+
//  |       |
//  +-------+
//  -1,-1
//  0       1
//
//
//
var vertsIn = [
	-1 , -1 ,  // 0 
	 1 , -1 ,  // 1
	 1 ,  1 ,  // 2
	-1 ,  1 ,  // 3
];
var vertsFront = [];
var vertsBack = [];
convert2Dto3D(vertsFront, vertsIn, -1); 
convert2Dto3D(vertsBack, vertsIn,  1); 
var vertsCube = [];
vertsCube = vertsFront.concat(vertsBack);

var indices = [ 
	0,1,2 , 0,2,3 ,  // front - counter
	4,7,6 , 4,6,5 ,  // back - clock

	1,5,6 , 1,6,2 ,  // right - counter
	0,3,7 , 0,7,4 ,  // left - clock

	0,4,5 , 0,5,1 ,  // bottom - clock
	3,2,6 , 3,6,7 ,  // top - counter
];

var verts = [];
genVertsByIndices(indices, verts, vertsCube);


var vertsCnt = verts.length / 3;



// colours
var coloursIn = [
	.9 , .0 , .0  ,  // red
	.9 , .0 , .0  ,  // red

	.0 , .9 , .0  ,  // green
	.0 , .9 , .0  ,  // green

	.0 , .0 , .9  ,  // blue 
	.0 , .0 , .9  ,  // blue 

	.9 , .9 , .0  ,  // blue 
	.9 , .9 , .0  ,  // blue 

	.9 , .0 , .9  ,  // blue 
	.9 , .0 , .9  ,  // blue 

	.0 , .9 , .9  ,  // blue 
	.0 , .9 , .9  ,  // blue 
];

var colours = [];
genThriceColoursArray(colours, coloursIn);
