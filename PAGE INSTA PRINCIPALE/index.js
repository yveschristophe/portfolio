var comment = document.getElementById("commenticon");
var Contenu = document.getElementById("content1");
var like = document.getElementById("likeicon");
var nombreLike = document.querySelector(".labeliconlike");
var nombrecomment = document.querySelector(".labeliconcomment");
var loop = document.getElementById("loop");
var input = document.getElementById("searchbar");
input.onclick = function noloop(){
  loop.style.visibility = "hidden";
}
function seeloop(){
  loop.style.visibility = "visible";
}