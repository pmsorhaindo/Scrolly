/**
 * PhysicsList
 *
 * A list of Physics affected controllers to be processed by the physics engine.
 */


define(["ElementPController"],
    function(ElementPController) {

function PhysicsList(newId) {

        // ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

    // ID for the element view
	var id = newId ? newId : "untitled";

    this.arrProcessList = new Array();

}


PhysicsList.prototype.push = function(objElementPController) {
    this.arrProcessList.push(objElementPController);
}

PhysicsList.prototype.pop = function() {
    return this.arrProcessList.pop();
}

PhysicsList.prototype.length = function() {
    return this.arrProcessList.length;
}

PhysicsList.prototype.toString = function() {
    return this.arrProcessList.toString();
}

return PhysicsList;

});