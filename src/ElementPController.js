/**
 * ElementPController
 *
 * Element Physics Controller a controller with extentions for physics
 * Extends ElementController.
 */

define(["ElementController","Inheritance"],function(ElementController,Inheritance) {

function ElementPController(newId) {

    // ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

    //Call Parent Constructor
    this.parent.constructor.call(this,newId);

    // Pre calculated for faster calculations (remember to update these values on changing x or y)
    this.flHalfWidth;
    this.flHalfHeight;

    // Velocity
    this.vx = 0;
    this.vy = 0;

    // Acceleration
    this.ax = 0;
    this.ay = 0;


    this.init();
    this.updateBounds();
}

ElementPController.inherits(ElementController);

ElementPController.prototype.init = function(){
    
    this.setX(1001);
    this.setY(1001);
    this.setVisible();
};

ElementPController.prototype.updateBounds = function(){    
    this.flHalfWidth = this.getWidth() * 0.5;
    this.flHalfHeight = this.getHeight() * 0.5;
};


// Getters for the mid point of the rect
ElementPController.prototype.getMidX = function(){
    return this.flHalfWidth + this.getX();
};

ElementPController.prototype.getMidY = function(){
        return this.flHalfHeight + this.getY();
};


// Getters for the top, left, right, and bottom of the bounding box rectangle
ElementPController.prototype.getTop = function() {
    return this.getY();
};
ElementPController.prototype.getLeft = function() {
    return this.getX();
};
ElementPController.prototype.getRight = function() {
    return this.getX() + this.getWidth();
};
ElementPController.prototype.getBottom = function() {
    return this.getY() + this.getHeight();
};

return ElementPController;
});