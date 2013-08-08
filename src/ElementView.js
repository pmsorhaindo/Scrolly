/**
 * ElementView
 *
 * Tracks position of where to draw an element and draws it.
 */

define(function() {

function ElementView(newId) {

        // ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 

        // ID for the element view
	var strId = newId ? newId : "untitled";

        var intX = 10, intY = 10, intWidth, intHeight;
        var blVisible = true;

        // ************************************************************************ 
	// PRIVILEGED METHODS 
 	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.toString = this.getId=function(){
                return strId
        };

	this.draw = function(objContext){ 
                console.log("drawing with context "+objContext);                
                if(objContext && blVisible == true)
                {
                        console.log("drawing the element view called "+strId);
		        objContext.fillStyle='#FF00F6';
                        objContext.fillRect(intX,intX,30,30);
                }
	};
        
        this.setX = function(){
                intX = x;
	};
        
        this.setY = function(){ 
                intY = y;
	};
        this.getX = function(){
                return intX;
	};
        
        this.getY = function(){ 
                return intY;
	};
        this.isVisible = function(){
                return blVisible;
        }
        this.setVisible =function(){
                blVisible = !blVisible;
        }
}

return ElementView;

});