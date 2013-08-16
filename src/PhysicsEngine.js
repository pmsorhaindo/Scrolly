/**
 *
 * PhysicsEngine
 *
 * The main physics controller
 *
 */

 define(function() {

function PhysicsEngine() {

	this.arrPhysicsLayers = new Array();

};

PhysicsEngine.prototype.addList = function (arrPhysicsLayer) {
	this.arrPhysicsLayers.push(arrPhysicsLayer);
};

PhysicsEngine.prototype.tick = function() {
	for (var h = 0; h<this.arrPhysicsLayers.length; h++) // for each physics layer.
	{
		for (var i = 0; i<this.arrPhysicsLayers[h].length(); i++)
		{
			this.applyGravity(this.arrPhysicsLayers[h].arrProcessList[i]);
		}
	}
};

PhysicsEngine.prototype.applyGravity = function(physicsElement) {
	physicsElement.setY(physicsElement.getY()+0.5*physicsElement.getMass());
}

return PhysicsEngine;
 });