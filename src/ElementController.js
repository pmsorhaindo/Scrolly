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

    this.flX;
    this.flY;
    this.flWidth;
    this.flHeight;
    this.blVisible = false;

    // ************************************************************************ 
	// PRIVILEGED METHODS 
 	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
    this.init();
}

ElementController.prototype.init = function() {

    this.setX(10);
    this.setY(10);
    this.setWidth(30);
    this.setHeight(30);
    this.setVisible();

};

ElementController.prototype.toString = ElementController.prototype.getId = function(){
    return strId
};
    
ElementController.prototype.setX = function(val){
    this.flX = val;
};
    
ElementController.prototype.setY = function(val){ 
    this.flY = val;
};
ElementController.prototype.getX = function(){
    return this.flX;
};
    
ElementController.prototype.getY = function(){ 
    return this.flY;
};

ElementController.prototype.setWidth = function(val){
    this.flWidth = val;
};
    
ElementController.prototype.setHeight = function(val){
    // TODO some error checking
    this.flHeight = val;
};
ElementController.prototype.getWidth = function(){
    return this.flWidth;
};
    
ElementController.prototype.getHeight = function(){
    return this.flHeight;
};

ElementController.prototype.isVisible = function(){
        return this.blVisible;
};
ElementController.prototype.setVisible =function(){
    this.blVisible = !this.blVisible;
};


return ElementController;
});