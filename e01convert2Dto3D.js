// author: Ned - Nadeem Elahi nadeem@webscripts.biz

function convert2Dto3D(verts3D, verts2D, zLoc){
	var  dim = 2, len = verts2D.length;

	for( var idx = 0 ; idx < len ; idx += dim ){

		verts3D.push( verts2D[ idx ] );
		verts3D.push( verts2D[ idx + 1 ] );
		verts3D.push( zLoc );
	}
}
