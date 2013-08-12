/**
 * RenderList
 *
 * Holds a list of items
 */

define(["ElementView"],
    function(ElementView) {

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
                this.arrRenderList[i].draw(objContext);
        }
}


return RenderList;

});