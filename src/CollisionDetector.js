/**
 * Collision Detector
 *
 * Takes Physics controllers and checks to see if they are colliding.
 */

define(function() {

function CollisionDetector(newId) {

}


// Rect collision tests the edges of each rect to
// test whether the objects are overlapping the other
CollisionDetector.prototype.collideRect = 
    function(collider, collidee) {

    // Store the collider and collidee edges
    var l1 = collider.getLeft();
    var t1 = collider.getTop();
    var r1 = collider.getRight();
    var b1 = collider.getBottom();
    
    var l2 = collidee.getLeft();
    var t2 = collidee.getTop();
    var r2 = collidee.getRight();
    var b2 = collidee.getBottom();
    
    // If any of the edges are beyond any of the others, then the box cannot be colliding
    if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
        return false;
    }
    
    // If the algorithm makes it here, it must have collided
    return true;
};

});