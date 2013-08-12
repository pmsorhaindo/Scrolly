// main?

define(function (require, exports, module) {


 // Load dependent modules
    var ElementController          = require("ElementController"),
        ElementPController         = require("ElementPController"),
        ElementView                = require("ElementView"),
        RenderList                 = require("RenderList"),
        Renderer                   = require("Renderer")
        AnimationLoop              = require("AnimationLoop");

var canvas=document.getElementById('myCanvas');

canvas.style.border = "1px solid red";
canvas.style.height = "500px";
canvas.style.width = "900px";


var x = new ElementPController();
console.log("can has inheritance? "+ x.getX());

var renderer = new Renderer();

console.log("renderer created");

var renderList = new RenderList("firstRenderList");

console.log("render list created");

var elliesController = new ElementController("x");
var ellie = new ElementView("Ellie",elliesController);

var a = new AnimationLoop();
a.start(renderer);


console.log("Ellie created");
console.log("Ellie's ex is " + ellie.getController().getX());

renderList.push(ellie);

console.log("Ellie pushed onto render list");

renderer.addList(renderList);

console.log("render list given to renderer");

console.log("rendering...");

renderer.render();

console.log("done");

var animLoop = new AnimationLoop(renderer);
animLoop.start();
//End of require.js function parameter
});