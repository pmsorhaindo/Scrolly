/**
 *
 * PhysicsEngine
 *
 * The main physics controller
 *
 */

define(["CollisionDetector"],function(CollisionDetector) {

function PhysicsEngine() {

	this.arrPhysicsLayers = new Array();
	this.collisionDetector = new CollisionDetector();

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

		this.testForCollisions(this.arrPhysicsLayers[h]);
	}
};

PhysicsEngine.prototype.applyGravity = function(physicsElement) {
	physicsElement.setY(physicsElement.getY()+(0.5*physicsElement.getMass()));
}

PhysicsEngine.prototype.testForCollisions = function(arrPhysicsLayer)
{
	for (var h = 0; h<arrPhysicsLayer.length(); h++)
	{
		for (var i = 0; i<arrPhysicsLayer.length(); i++)
		{
			var arrList = arrPhysicsLayer.arrProcessList;
			if (h != i && arrList[h].getId()!= arrList[i].getId())
			{
				var collision = this.collisionDetector.collideRect(arrList[h],arrList[i]);
				if (collision){alert("halleluja! we have physics!!");}
			}
		}
	}
}



return PhysicsEngine;
 });