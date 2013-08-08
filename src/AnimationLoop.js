/**
 * AnimationLoop
 *
 * Handles animation the sequence
 */

define(function() {

// requestAnimationFrame shim, providing support for older browsers/devices.
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function () {
        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback,element) {
            window.setTimeout(callback, 1000 / 60); // Fallback timeout
        };
    })();
}

var AnimationLoop = function () {
    if (AnimationLoop._instance) {
        //this allows the constructor to be called multiple times
        //and refer to the same instance. Another option is to
        //throw an error.
        console.log("Singleton Animation Loop has already been instantiated.");
        return AnimationLoop._instance;
    }

    AnimationLoop._instance = this;
    //AnimationLoop initialization code goes below here!

    this.isAnimating = false;    // Is animation on or off?
    this.animateRunning = false; // Are we in the animation loop?
    this.requiresRedraw = true;  // Do the static elements need to be redrawn?

    this.i = 0;

    //binding functions that may loose scope.
    this.run = this.run.bind(this);
};
AnimationLoop.getInstance = function () {
    
    console.log("Grabbing an instance of AnimationLoop, retrieving or creating as necessary.")
    return AnimationLoop._instance || new AnimationLoop();
}

AnimationLoop.prototype.start = function () {
    this.isAnimating = true;
    console.log("Starting Animation")
    if (!this.animateRunning) this.run();
};

AnimationLoop.prototype.stop = function () {
    this.isAnimating = false;
};

AnimationLoop.prototype.run = function () {
    if (this.isAnimating) { // Only draw if we are drawing
        this.animateRunning = true;
        try {
            
            var canvas=document.getElementById('myCanvas');

            var ctx = canvas.getContext('2d');

            ctx.fillStyle='#2220B0';
            ctx.fillRect(50-this.i,40+this.i,50,50);
            this.i++;

        } catch (e) {
            if (window.console && window.console.log)
                window.console.log(e + " .. unfortunately the animation loop failed."); // for debugging
        }
        requestAnimationFrame(this.run);
        this.animateRunning = false; // No longer running animation function (can now be called again)
    }
};

return AnimationLoop;

});

/*
var isAnimating = false;    // Is animation on or off?
var animateRunning = false; // Are we in the animation loop?
var requiresRedraw = true;  // Do the static elements need to be redrawn?
 
function startAnimating() { // Start animating/drawing
    isAnimating = true;
    if (!animateRunning) Draw(); // Only draw if we are not already drawing
}
function stopAnimating() {  //t Stop animating/drawing
    isAnimating = false;
}
 
function draw() {
    if (isAnimating) { // Only draw if we are drawing
        animateRunning = true;
        try {
            if (requiresRedraw) {
                requiresRedraw = false;
                renderStatic(); // function defined elsewhere
                                // which draws static elements
            }
            renderAnim(); // function defined elsewhere
                          // which draws animated elements
        } catch (e) {
            if (window.console && window.console.log)
                window.console.log(e); // for debugging
        }
        requestAnimationFrame(Draw);
        animateRunning = false;
    }
}
*/
