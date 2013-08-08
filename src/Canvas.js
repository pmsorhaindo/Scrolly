// main?

define(function (require, exports, module) {


 // Load dependent modules
    var ElementView                = require("ElementView"),
        RenderList                 = require("RenderList"),
        Renderer                   = require("Renderer")
        AnimationLoop              = require("AnimationLoop");

var canvas=document.getElementById('myCanvas');

canvas.style.border = "1px solid red";
canvas.style.height = "500px";
canvas.style.width = "900px";


var ctx = canvas.getContext('2d');

console.log("ctx = ",ctx);

ctx.fillStyle='#000000';
ctx.fillRect(0,0,500,900);


console.log("Yo!");

var a = new AnimationLoop();
a.start();

var renderer = new Renderer();

console.log("renderer created");

var renderList = new RenderList("firstRenderList");

console.log("render list created");

var ellie = new ElementView("Ellie");

console.log("Ellie created");
console.log("Ellie's ex is " + ellie.getX());

renderList.push(ellie);

console.log("Ellie pushed onto render list");

renderer.addList(renderList);

console.log("render list given to renderer");

console.log("rendering...");

renderer.render();

console.log("done");

//End of require.js function parameter
});