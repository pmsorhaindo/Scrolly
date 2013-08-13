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

var elliesController = new ElementPController("x");
var ellie = new ElementView("Ellie",elliesController);

var a = new AnimationLoop();
a.setPhysicsEngine(engine);
a.start(renderer);


console.log("Ellie created");

renderList.push(ellie);
physicsList.push(elliesController);

console.log("Ellie and her controller pushed onto render and physics lists respectively");

renderer.addList(renderList);
engine.addList(physicsList);

//End of require.js function parameter
});