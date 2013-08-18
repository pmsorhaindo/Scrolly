/**
 *
 * PhysicsEngine
 *
 * The main physics controller
 *
 */

define(["Force","CollisionDetector"],function(Force,CollisionDetector) {

function PhysicsEngine() {

	this.STICKY_THRESHOLD = 0.0004;

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

		this.testForCollisions(this.arrPhysicsLayers[h]); // test for collison between objects in that layer.
	}
};

PhysicsEngine.prototype.applyGravity = function(arrPhysicsElements) {
	var gravity = new Force(0,9,"gravity"); 
	
	for(var i = 0; i<arrPhysicsElements.arrProcessList.length; i++)
	{
		arrPhysicsElements.arrProcessList[i].addForce(gravity);
		console.log("new force j "+arrPhysicsElements.arrProcessList[i].arrForces[0].getJ());
	}
};

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
				if (collision){
					console.log("halleluja! we have physics!!");
					this.resolveElastic(arrList[h],arrList[i]);
				}
			}
		}
	}
};

PhysicsEngine.prototype.resolveElastic = function(obj1, obj2) {
    // Find the mid points of the obj1 and obj2
    var pMidX = obj1.getMidX();
    var pMidY = obj1.getMidY();
    var aMidX = obj2.getMidX();
    var aMidY = obj2.getMidY();

    obj1vx = obj1.determineResultantForce().getI();
    obj1vy = obj1.determineResultantForce().getJ();
    
    // To find the side of entry calculate based on
    // the normalized sides
    var dx = (aMidX - pMidX) / obj2.halfWidth;
    var dy = (aMidY - pMidY) / obj2.halfHeight;
    
    // Calculate the absolute change in x and y
    var absDX = Math.abs(dx);
    var absDY = Math.abs(dy);
    
    // If the distance between the normalized x and y
    // position is less than a small threshold (.1 in this case)
    // then this object is approaching from a corner
    if (Math.abs(absDX - absDY) < .1) {

        // If the obj1 is approaching from positive X
        if (dx < 0) {

            // Set the obj1 x to the right side
            obj1.setX(obj2.getRight());

        // If the obj1 is approaching from negative X
        } else {

            // Set the obj1 x to the left side
            obj1.setX(obj2.getLeft() - obj1.getWidth());
        }

        // If the obj1 is approaching from positive Y
        if (dy < 0) {

            // Set the obj1 y to the bottom
            obj1.setY(obj2.getBottom());

        // If the obj1 is approaching from negative Y
        } else {

            // Set the obj1 y to the top
            obj1.setY(obj2.getTop() - obj1.getHeight());
        }
        
        // Randomly select a x/y direction to reflect velocity on
        if (Math.random() < .5) {

            // Reflect the velocity at a reduced rate
            obj1vx = -obj1vx * obj2.restitution;

            // If the object's velocity is nearing 0, set it to 0
            // STICKY_THRESHOLD is set to .0004
            if (Math.abs(obj1vx) < this.STICKY_THRESHOLD) {
                obj1vx = 0;
            }
        } else {

            obj1vy = -obj1vy * obj2.restitution;
            if (Math.abs(obj1vy) < this.STICKY_THRESHOLD) {
                obj1vy = 0;
            }
        }

    // If the object is approaching from the sides
    } else if (absDX > absDY) {

        // If the obj1 is approaching from positive X
        if (dx < 0) {
            obj1.setX(obj2.getRight());

        } else {
        // If the obj1 is approaching from negative X
            obj1.setX(obj2.getLeft() - obj1.getWidth());
        }
        
        // Velocity component
        obj1vx = -obj1vx * obj2.restitution;

        if (Math.abs(obj1vx) < this.STICKY_THRESHOLD) {
            obj1vx = 0;
        }

    // If this collision is coming from the top or bottom more
    } else {

        // If the obj1 is approaching from positive Y
        if (dy < 0) {
            obj1.setY(obj2.getBottom());

        } else {
        // If the obj1 is approaching from negative Y
            obj1.setY(obj2.getTop() - obj1.getHeight());
        }
        
        // Velocity component
        obj1vy = -obj1vy * obj2.restitution;
        if (Math.abs(obj1vy) < this.STICKY_THRESHOLD) {
            obj1vy = 0;
        }
    }

    reultantForce = new Force(obj1vx,obj1vy);
    obj1.addForce(reultantForce);
};

return PhysicsEngine;
});