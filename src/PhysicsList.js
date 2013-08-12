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

        this.push = function(objElementPController) {
                this.arrProcessList.push(objElementPController);
        }

        this.pop = function() {
                return this.arrProcessList.pop();
        }
        this.toString = function() {
                return this.arrProcessList.toString();
        }
}


return PhysicsList;

});