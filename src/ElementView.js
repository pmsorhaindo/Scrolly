/**
 * ElementView
 *
 * Tracks position of where to draw an element and draws it.
 */

define(["ElementController"],function() {

function ElementView(newId) {

    // ID for the element view
	this.strId = newId ? newId : "untitled";
    this.controller = new ElementController("untitled");
}

function ElementView(newId,newController) {

    // ID for the element view
    this.strId = newId ? newId : "untitled";
    this.controller = newController;
}

ElementView.prototype.toString = ElementView.prototype.getId=function(){
    return strId
};

ElementView.prototype.draw = function(objContext){

    if(this.controller == null)
    {
        console.log("no controller assigned to view");
        return;
    }

    console.log("drawing with context "+objContext);                
    if(objContext && this.controller.isVisible() == true)
    {
        console.log("drawing the element view called " + this.strId + " " + this.controller.getX());
        objContext.fillStyle='#FF00F6';
        objContext.fillRect(this.controller.getX(),
                            this.controller.getX(),
                            30,
                            30);
    }
};

ElementView.prototype.setController = function(x){
    this.controller = x;
};

ElementView.prototype.getController = function(){
    return this.controller;
};

return ElementView;
});