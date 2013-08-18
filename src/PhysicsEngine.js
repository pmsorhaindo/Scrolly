/**
 *
 * PhysicsEngine
 *
 * The main physics controller
 *
 */

define(["Force","CollisionDetector"],function(Force,CollisionDetector) {

function PhysicsEngine() {

	this.arrPhysicsLayers = new Array();
	this.collisionDetector = new CollisionDetector();

};

PhysicsEngine.prototype.addList = function (arrPhysicsLayer) {
	this.applyGravity(arrPhysicsLayer);
	this.arrPhysicsLayers.push(arrPhysicsLayer);
};

PhysicsEngine.prototype.tick = function() {
	for (var h = 0; h<this.arrPhysicsLayers.length; h++) // for each physics layer.
	{
		for (var i = 0; i<this.arrPhysicsLayers[h].length(); i++)
		{
			(this.arrPhysicsLayers[h].arrProcessList[i]).move();
		}

		this.testForCollisions(this.arrPhysicsLayers[h]);
	}
};

PhysicsEngine.prototype.applyGravity = function(arrPhysicsElements) {
	var gravity = new Force(0,9,"gravity"); 
	
	for(var i = 0; i<arrPhysicsElements.arrProcessList.length; i++)
	{
		arrPhysicsElements.arrProcessList[i].addForce(gravity);
		console.log("new force j "+arrPhysicsElements.arrProcessList[i].arrForces[0].getJ());
	}
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