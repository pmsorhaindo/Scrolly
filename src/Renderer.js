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

        this.arrRenderLists = new Array();
}

Renderer.prototype.render = function(){

        for(i in this.arrRenderLists){
                this.arrRenderLists[i].process(this.domContext);
        }
} 

Renderer.prototype.addList = function(arrRenderList){
    
        this.arrRenderLists.push(arrRenderList);
}

return Renderer;

});