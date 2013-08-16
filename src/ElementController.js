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
    console.log("fall through in ElementController")
    this.setX(30);
    this.setY(50);
    this.setWidth(20);
    this.setHeight(30);
    
    // As init functions are run twice (due to inheritance) can't be sure of the value of blVisible so set explicitly.
    this.setVisible(true);
    }


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


return ElementController;
});