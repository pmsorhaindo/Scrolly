
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



var isAnimating = false;    // Is animation on or off?
var animateRunning = false; // Are we in the animation loop?
var requiresRedraw = true;  // Do the static elements need to be redrawn?
 
function StartAnimating() { // Start animating/drawing
    isAnimating = true;
    if (!animateRunning) Draw(); // Only draw if we are not already drawing
}
function StopAnimating() {  // Stop animating/drawing
    isAnimating = false;
}
 
function Draw() {
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
