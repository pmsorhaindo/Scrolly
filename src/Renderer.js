/**
 * Renderer Class.
 *
 * Manages render lists and draws the contents to screen.
 */

define(["RenderList"],
    function(RenderList) {

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

return Renderer;

});