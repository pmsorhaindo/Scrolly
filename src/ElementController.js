/**
 * ElementController
 *
 * Handles the model and controller aspects of each element.
 */

define(function() {

function ElementController(newId) {

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
    };
    this.setVisible =function(){
        blVisible = !blVisible;
    };
}

return ElementController;
});