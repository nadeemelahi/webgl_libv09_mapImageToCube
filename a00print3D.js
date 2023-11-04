// author: Ned - Nadeem Elahi nadeem@webscripts.biz

function print3D(verts){ 
	var len = verts.length;
	for(var idx = 0; idx < len; idx += 3){ 
		console.log(verts[idx] + "," 
			+ verts[idx+1] + "," 
			+ verts[idx+2] ); } 
}
