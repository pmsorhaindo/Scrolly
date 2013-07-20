var canvas=document.getElementById('myCanvas');

canvas.style.border = "1px solid red";
canvas.style.height = "500px";
canvas.style.width = "900px";


var ctx = canvas.getContext('2d');

console.log("ctx = ",ctx);

ctx.fillStyle='#000000';
ctx.fillRect(0,0,500,900);


console.log("Yo!");



/**
 * ElementView
 *
 * Tracks position of where to draw an element and draws it.
 */
function ElementView(newId) {

        // ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

        // ID for the element view
	var strId = newId ? newId : "untitled";

        var intX = 10, intY = 10, intWidth, intHeight;
        var blVisible = true;

        // ************************************************************************ 
	// PRIVILEGED METHODS 
 	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.toString = this.getId=function(){
                return strId
        };

	this.draw = function(objContext){ 
                console.log("drawing with context "+objContext);                
                if(objContext && blVisible == true)
                {
                        console.log("drawing the element view called "+strId);
		        objContext.fillStyle='#FF00F6';
                        objContext.fillRect(intX,intX,30,30);
                }
	};
        
        this.setX = function(){
                intX = x;
	};
        
        this.setY = function(){ 
                intY = y;
	};
        this.getX = function(){
                return intX;
	};
        
        this.getY = function(){ 
                return intY;
	};
        this.isVisible = function(){
                return blVisible;
        }
        this.setVisible =function(){
                blVisible = !blVisible;
        }
}


/**
 * RenderList
 *
 * Holds a list of items 
 */
function RenderList(newId) {

        // ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

        // ID for the element view
	var id = newId ? newId : "untitled";

        this.arrRenderList = new Array();

        this.push = function(objElementView) {
                this.arrRenderList.push(objElementView);
                console.log("Is ellie still alive "+objElementView.getX());
        }

        this.pop = function() {
                return this.arrRenderList.pop();
        }
        this.toString = function() {
                return this.arrRenderList.toString();
        }
}

RenderList.prototype.process = function(objContext) {
        for (var i = 0; i<this.arrRenderList.length; i++) {
                console.log("drawing item in render list")
                this.arrRenderList[i].draw(objContext);
        }
}

function Renderer(canvas) {

        this.domCanvas = document.getElementById('myCanvas');
        this.domContext = this.domCanvas.getContext('2d');
        console.log("our context is "+this.domContext);
        //this.domCanvas = document.getElementById("myCanvas");
        //this.domContext = domCanvas.getContext('2d');      
        this.arrRenderLists = new Array();
}

Renderer.prototype.render = function(){

        for(i in this.arrRenderLists){
                console.log("processing render list : " + i + " with context "+ this.domContext);
                this.arrRenderLists[i].process(this.domContext);
                console.log("render!");
        }
        console.log("render finished");
} 

Renderer.prototype.addList = function(arrRenderList){
        
        this.arrRenderLists.push(arrRenderList);
        console.log(this.arrRenderLists);
}


var renderer = new Renderer();

console.log("renderer created");

var renderList = new RenderList("firstRenderList");

console.log("render list created");

var ellie = new ElementView("Ellie");

console.log("Ellie created");
console.log("Ellie's ex is " + ellie.getX());

renderList.push(ellie);

console.log("Ellie pushed onto render list");

renderer.addList(renderList);

console.log("render list given to renderer");

console.log("rendering...");

renderer.render();

console.log("done");
