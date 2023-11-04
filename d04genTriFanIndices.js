// author: Ned - Nadeem Elahi nadeem@webscripts.biz

//------------------------------------------
//https://webglfundamentals.org/webgl/lessons/webgl-points-lines-triangles.html
//
//  FAN - center aligned triangles
//      - mesh with center vert
//      - perfect for drawing a circle
//
//  - will draw 0,1,2 ,
//              0,2,3 ,
//              0,3,4 ,
//              0,4,5
//
//   (1)   (2)  (3)
//     +----+----+ 
//      \   |   /
//       \  |  /
//        \ | /
//         \|/
//          +
//         (0)
//
//------------------------------------------

function genTriFanIndices(indicesOut, len){
	for ( var idx = 1 ; idx < len ; idx ++ ){
		indicesOut.push(0);
		indicesOut.push(idx);
		indicesOut.push(idx + 1);
	}
}
//testTriFan();
function testTriFan(){
	var indices = [];
	var size = 5;
	genTriFanIndices(indices, size);
	print3D(indices);
}
