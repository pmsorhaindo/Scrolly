/**
 * ElementPController
 *
 * Element Physics Controller a controller with extentions for physics
 * Extends ElementController.
 */

define(["ElementController","Inheritance","Force"],function(ElementController,Inheritance,Force) {

function ElementPController(newId,objPhysicsElementSetup) {

    // ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

    //Call Parent Constructor
    this.parent.constructor.call(this,newId);

    this.strId = newId ? newId : "untitled";

    // Pre calculated for faster calculations (remember to update these values on changing x or y)
    this.flHalfWidth;
    this.flHalfHeight;

    // Resultant Force
    this.vi = 0;
    this.vy = 0;

    // Acceleration
    this.ax = 0;
    this.ay = 0;

    this.flMass = 1.0;
    this.arrForces = new Array();



    this.init(objPhysicsElementSetup);
    this.updateBounds();
}

ElementPController.inherits(ElementController);

ElementPController.prototype.init = function(objPhysicsElementSetup){
    
    if(objPhysicsElementSetup)
    {
    this.setX(objPhysicsElementSetup.x);
    this.setY(objPhysicsElementSetup.y);
    this.setWidth(objPhysicsElementSetup.width);
    this.setHeight(objPhysicsElementSetup.height);
    this.setVisible(objPhysicsElementSetup.visible);
    this.setColour(objPhysicsElementSetup.colour);
    this.setMass(objPhysicsElementSetup.mass);
    }
    else
    {
    console.log("Init ElementPController called without parameters!")
    }

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

ElementPController.prototype.getMass = function(){    
    return this.flMass;
};

ElementPController.prototype.setMass = function(val){    
    this.flMass = val;
};

ElementPController.prototype.addForce = function(val){
    if(val instanceof Force)
    {
        this.arrForces.push(val);
    }
};

ElementPController.prototype.move = function(){
    
    var resultantI = 0, resultantJ = 0;

    // TODO to avoid this calculation each move add a flag to determine whether forces were modified during the tick
    for(var i = 0; i<this.arrForces.length; i++)
    {
        resultantI += this.arrForces[i].getI();
        resultantJ += this.arrForces[i].getJ();
    }
    //console.log("Y: ", this.getY(), " X: ",this.getX(), " resultantI: ", resultantI, " resutltantJ: ", resultantJ);
    this.setX(this.getX()+(resultantI*0.03)*this.flMass);
    this.setY(this.getY()+(resultantJ*0.03)*this.flMass);
}


return ElementPController;
});