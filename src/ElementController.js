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

    this.intX;
    this.intY;
    this.intWidth;
    this.intHeight;
    this.blVisible = false;

    // ************************************************************************ 
	// PRIVILEGED METHODS 
 	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.toString = this.getId=function(){
        return strId
    };
        
    this.setX = function(val){
        this.intX = val;
	};
        
    this.setY = function(val){ 
        this.intY = val;
	};
    this.getX = function(){
        return this.intX;
	};
        
    this.getY = function(){ 
		return this.intY;
	};
    
    this.setWidth = function(val){
        this.intWidth = val;
    };
        
    this.setHeight = function(val){
        // TODO some error checking
        this.intHeight = val;
    };
    this.getWidth = function(){
        return this.intWidth;
    };
        
    this.getHeight = function(){ 
        return this.intHeight;
    };

    this.isVisible = function(){
            return this.blVisible;
    };
    this.setVisible =function(){
        this.blVisible = !this.blVisible;
    };

    this.init();
}

ElementController.prototype.init = function() {

    this.setX = 10;
    this.setY = 10;
    this.setVisible();

};

return ElementController;
});