// author: Ned - Nadeem Elahi nadeem@webscripts.biz

var data = {

	// translation
	xLoc : 0 , yLoc : 0 , zLoc : 0 ,
	// scale
	xScale : 0.5 , yScale : 0.5 , zScale : 0.5,
	// rotation
	xAngle : 0 , yAngle : 0 , zAngle : 0,
	
	// vanishing point perspective divide
	psvFactor: 0, 
	
	set_scaleXYZ : function(scale){
		this.xScale = this.yScale = this.zScale = scale;
	},

	// t-translation s-scale r-rotation
	// p-perspective
	load_tsrp : function(){
		ngl.loadUniform1f("xLoc",this.xLoc);
		ngl.loadUniform1f("yLoc",this.yLoc);
		ngl.loadUniform1f("zLoc",this.zLoc);

		ngl.loadUniform1f("xScale",this.xScale);
		ngl.loadUniform1f("yScale",this.yScale);
		ngl.loadUniform1f("zScale",this.zScale);

		ngl.loadUniform1f("xAngle",this.xAngle);
		ngl.loadUniform1f("yAngle",this.yAngle);
		ngl.loadUniform1f("zAngle",this.zAngle);

		ngl.loadUniform1f("psvFactor",this.psvFactor);
	},

	getFullscreenQuad: function(){
		return [
			-1 , -1 , // bottom left
			 1 , -1 , // bottom right
			 1 ,  1 , // top right 

			-1 , -1 , // bottom left
			 1 ,  1 , // top right 
			-1 ,  1 , // top left
		];
	}
};
