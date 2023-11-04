// author: Ned - Nadeem Elahi nadeem@webscripts.biz

//------------------------------------------
//
//https://webglfundamentals.org/webgl/lessons/webgl-points-lines-triangles.html
//
//  STRIP - edge aligned triangles
//  -will draw : 0,1,2 , 
//               1,2,3 ,
//               2,3,4 ,
//               3,4,5
//
//     (0)  (2)
//      +----+
//      |   /|
//      |  / |
//      | /  |
//      |/   |
//      +----+
//     (1)  (3)
//
// 3 indices = 1 triangle
// each additional vert adds another 3 indices
//------------------------------------------

function genTriStripIndices(indicesOut, len){
	var idx, jdx;
	for ( idx = 0 ; idx < len ; idx ++ ){
		for ( jdx = 0; jdx < 3; jdx ++ ){
			indicesOut.push( idx + jdx );
		}
	}
}
//testTriStrip();
function testTriStrip(){
	var indices = [];
	var size = 5;
	genTriStripIndices(indices, size);
	print3D(indices);
}
