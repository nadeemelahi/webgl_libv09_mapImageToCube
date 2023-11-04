// author: Ned - Nadeem Elahi nadeem@webscripts.biz

function genVertsByIndices(indices, vertsOut, vertsIn){
	
	var idx, jdx, vertsStartIndex,
		ilen = indices.length, 
		vlen = vertsIn.length;

	// loop indices array
	for ( idx = 0 ; idx < ilen ; idx ++ ){
		// mapping indices[] -> vertsIn
		vertsStartIndex = indices[idx] * 3;
		
		for ( jdx = 0 ; jdx < 3 ; jdx ++ ){

			vertsOut.push( vertsIn[ vertsStartIndex + jdx ] );
		}
	}
};

//testVbyI();
function testVbyI(){

	var indices = [ 0,1,2  , 0,2,3 ],
		vertsOut = [],
		vertsIn = [ -1,-1,0  ,  1,-1,0  ,  1,1,0  ,  -1,1,0 ];
	
	genVertsByIndices(indices, vertsOut, vertsIn);
	print3D(vertsOut);
}
