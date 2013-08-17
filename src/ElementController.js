/**
 * ElementController
 *
 * Handles the model and controller aspects of each element.
 */

define(function() {

function ElementController(newId,objElementSetup) {

    // ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

        // ID for the element view
	this.strId = newId ? newId : "untitled";

    this.flX;
    this.flY;
    this.flWidth;
    this.flHeight;
    this.strColourHex = "#FF00F6"
    this.blVisible = false;

    // ************************************************************************ 
	// PRIVILEGED METHODS 
 	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
    this.init(objElementSetup);
}

ElementController.prototype.init = function(objElementSetup) {

    if(objElementSetup)
    {
        this.setX(objElementSetup.x);
        this.setY(objElementSetup.y);
        this.setWidth(objElementSetup.width);
        this.setHeight(objElementSetup.height);
        this.setVisible(objElementSetup.visible);
    }
    else
    {
        console.log("Init ElementPController called without parameters!");
    }


};

ElementController.prototype.getId = function(){
    return this.strId
};

ElementController.prototype.toString = ElementController.prototype.getId;
    
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

ElementController.prototype.setVisible =function(blVal){
    if(blVal == null)
    {
        this.blVisible = !this.blVisible;
    }
    else if (blVal === true || blVal === false)
    {
        this.blVisible = blVal;
    }
};

ElementController.prototype.getColour = function(){
        return this.strColourHex;
};

ElementController.prototype.setColour = function(val){
        this.strColourHex = val;
};

return ElementController;
});