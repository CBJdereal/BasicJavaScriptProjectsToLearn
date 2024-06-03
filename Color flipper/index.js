const body = document.getElementsByTagName('body')[0];

function setColor(name){
     body.style.backgroundColor = name;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}