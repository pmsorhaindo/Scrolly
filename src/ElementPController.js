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

    this.init();
}
ElementPController.inherits(ElementController);

ElementPController.prototype.init = function(){
    this.setX = 1001;
    this.setY = 1001;
    this.setVisible();
};

return ElementPController;
});