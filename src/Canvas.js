// main?

define(function (require, exports, module) {


 // Load dependent modules
    var ElementController          = require("ElementController"),
        ElementPController         = require("ElementPController"),
        ElementView                = require("ElementView"),
        RenderList                 = require("RenderList"),
        PhysicsList                = require("PhysicsList"),
        PhysicsEngine              = require("PhysicsEngine"),
        Renderer                   = require("Renderer"),
        AnimationLoop              = require("AnimationLoop");

var canvas=document.getElementById('myCanvas');

canvas.style.border = "1px solid red";
canvas.style.height = "500px";
canvas.style.width = "900px";


var renderer = new Renderer();

var engine = new PhysicsEngine();

console.log("renderer and engine created");

var renderList = new RenderList("firstRenderList");

var physicsList = new PhysicsList("firstPhysicsList");

console.log("render and physics lists created");

var elliesControllerSettings = {
	x:50,
	y:30,
	width:20,
	height:20,
	mass:1.2,
	visible:true
}
var elliesController = new ElementPController("ellieController",elliesControllerSettings);
var ellie = new ElementView("Ellie",elliesController);

var elliotsControllerSettings = {
	x:100,
	y:30,
	width:20,
	height:20,
	mass:1,
	visible:true
}
var elliotsController = new ElementPController("elliotController",elliotsControllerSettings);
var elliot = new ElementView("Elliot",elliotsController);

var a = new AnimationLoop();
a.setPhysicsEngine(engine);
a.start(renderer);


console.log("Ellie created");

renderList.push(ellie);
physicsList.push(elliesController);

renderList.push(elliot);
physicsList.push(elliotsController);


console.log("Ellie and her controller pushed onto render and physics lists respectively");

renderer.addList(renderList);
engine.addList(physicsList);

//End of require.js function parameter
});