// author: Ned - Nadeem Elahi nadeem@webscripts.biz

// Usually, we will want to paint by triangle
// instead of by vert
// ie) all three verts of a triangle the same colour
// This script will take coloursIn = [ col1, col2, ...]
// and generate [ col1, col1, col1,
//                col2, col2, col2, ...
//

function genThriceColoursArray(coloursOut, coloursIn){

	var idx, jdx, kdx, len = coloursIn.length;
	// loop over coloursIn 3(rgb) at a time
	for( idx = 0 ; idx < len ; idx += 3 ){

		// painting all 3 triangle's verts the same colour
		// ie) 3X -3 verts per triangle
		for ( jdx = 0 ; jdx < 3 ; jdx ++ ){

			// 3 channels rgb
			for ( kdx = 0 ; kdx < 3 ; kdx ++ ){
				coloursOut.push( coloursIn[idx + kdx] );
			}

		}
	}
}

//testThrice();
function testThrice(){

	var coloursIn = [
		1, 1, 1, 
		0, 0, 0,
		1, 0, 0, 
		0, 1, 0, 
		0, 0, 1, 
		1, 0, 1,
		1, 1, 0,
		1, 0, 1,
		0, 1, 1,
	];

	var coloursOut = []; 

	genThriceColoursArray(coloursOut, coloursIn);

	print3D(coloursOut);

}
