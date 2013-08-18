/**
 * Force
 *
 * Simple class to hold type Force
 */

define(function() {

function Force(i,j,newId) {

	this.i = i;
	this.j = j;
	this.strId = newId ? newId : "untitled";
}

Force.prototype.getI = function(){
	return this.i;
}

Force.prototype.getJ = function(){
	return this.j;
}

Force.prototype.getId = function(){
	return this.strId;
}

return Force;
});