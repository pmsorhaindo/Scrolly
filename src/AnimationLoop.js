/**
 * AnimationLoop
 *
 * Handles animation the sequence
 */

define(["Renderer"],function(Renderer) {

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

var AnimationLoop = function (objRenderer) {
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
    this.renderer = null; // the renderer object to run in the animation loop

    if(objRenderer != null)
    {
        this.renderer = objRenderer;
    }

    this.i = 0;

    this.canvas=document.getElementById('myCanvas');

    this.ctx = this.canvas.getContext('2d');

    //binding functions that may loose scope.
    this.run = this.run.bind(this);
};
AnimationLoop.getInstance = function () {
    
    console.log("Grabbing an instance of AnimationLoop, retrieving or creating as necessary.")
    return AnimationLoop._instance || new AnimationLoop();
}

AnimationLoop.prototype.start = function (objRenderer) {
    this.isAnimating = true;

    if(objRenderer instanceof Renderer)
    {
        this.setRenderer(objRenderer);
    }

    console.log("Starting Animation")
    if (!this.animateRunning) this.run();
};

AnimationLoop.prototype.stop = function () {
    this.isAnimating = false;
};

AnimationLoop.prototype.setRenderer = function (objRenderer) {
    this.renderer = objRenderer;
}

AnimationLoop.prototype.run = function () {
    if (this.isAnimating) { // Only draw if we are drawing
        this.animateRunning = true;
        try {
            
            // Clear the canvas
            // Store the current transformation matrix
            this.ctx.save();

            // Use the identity matrix while clearing the canvas (ensures you are clearing what you want to clear)
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Restore the transform
            this.ctx.restore();


            //background
            this.ctx.fillStyle='#000000';
            this.ctx.fillRect(0,0,500,900);


            // Run renderer
            /*this.ctx.fillStyle='#2220B0';
            this.ctx.fillRect(50-this.i,40+this.i,50,50);
            this.i++;*/
            this.renderer.render();


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