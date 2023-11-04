// author: nadeem@webscripts.biz
"use strict"; 
var ngl = new function (){
	this.canvas = document.getElementById("cnv");
	this.canvas.width=window.innerWidth;
	this.canvas.height=window.innerHeight;

	var gl = this.canvas.getContext('webgl');
	if(!gl) { console.log("no gl support"); return; }

	
	var shaders = []; 
	var activeIdx = 0;
	function compile( index , vsId , fsId ){
		var vs = gl.createShader(gl.VERTEX_SHADER);
		var vs_src = document.getElementById(vsId).text;
		gl.shaderSource(vs , vs_src);
		gl.compileShader(vs);

		var fs = gl.createShader(gl.FRAGMENT_SHADER); 
		var fs_src = document.getElementById(fsId).text;
		gl.shaderSource(fs , fs_src);
		gl.compileShader(fs);

		var prog = gl.createProgram();
		gl.attachShader(prog,vs); 
		gl.attachShader(prog,fs);
		gl.linkProgram(prog);

		shaders[ index ] = prog;
	}
	
	compile( 0 , 'vs0_fsQuad' , 'fs0_vfsTexQuad' );
	compile( 1 , 'vs1_fsTextureQuad' , 'fs1_vfsDataTexQuad' );
	compile( 2 , 'vs2_verts_colours_tsr_p' , 'fs2_vcolours' );
	compile( 3 , 'vs3_verts_cubeFacesMap_tsr_p' , 'fs3_vcubeFaces' );

	this.setShaderProgByIndex = function( idx ){
		activeIdx = idx;
		gl.useProgram( shaders[ activeIdx ] );
	};

	// DATA TRANSFER - uses linkedShaderList & vsProg fsProg

	this.loadAttribute = function(data, name, dim){
		// transfer data to gpu
		gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer() );
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

		// ---------point attribute location
		var ptr = gl.getAttribLocation( shaders[ activeIdx ] , name);

		gl.vertexAttribPointer(ptr, dim, gl.FLOAT,false,0,0);
		gl.enableVertexAttribArray(ptr);

		// unbind
		gl.bindBuffer(gl.ARRAY_BUFFER,null);
	};

	this.loadUniform1f = function(name,i){
		var ptr = gl.getUniformLocation( shaders[ activeIdx ], name );
		gl.uniform1f(ptr,i);
	};

	var imgTextureList = [];
	this.createImgTexture = function( idx ){
		var texture = gl.createTexture();
		imgTextureList[ idx ] = texture;
	};
	
	var gpuTexturesRefList = [ "TEXTURE0", "TEXTURE1", "TEXTURE2", "TEXTURE3", "TEXTURE4", "TEXTURE5"];
	this.loadImageTexture = function(image, name, textureUnit, idx ){
		// Create a texture.
		gl.bindTexture( gl.TEXTURE_2D, imgTextureList[ idx ] );

		// Set the parameters so we can render any size image.
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

		// Upload the image into the texture.
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

		var gpuRef = gl.getUniformLocation( shaders[ activeIdx ], name );
		gl.uniform1i(gpuRef , textureUnit);

		var textureI = gpuTexturesRefList [ textureUnit ];
		gl.activeTexture( gl[ textureI ] );

		//gl.bindTexture(gl.TEXTURE_2D, null);// DO NOT UNBIND 
	};

	this.setBackgroundNviewport= function( bg, dim ){
		gl.clearColor( bg[0] , bg[1] , bg[2] , bg[3] );
		gl.enable(gl.DEPTH_TEST); 
		var xOrigin = dim[0] * this.canvas.width;
		var yOrigin = dim[1] * this.canvas.height;
		var width = dim[2] * this.canvas.width;
		var height = dim[3] * this.canvas.height;
		gl.viewport( xOrigin , yOrigin , width , height );
	};


	// clear
	this.clear = function(){
		gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
	};

	// draw
	this.draw = function(idx,cnt){
		gl.drawArrays( gl.TRIANGLES , idx , cnt );
	};

};

