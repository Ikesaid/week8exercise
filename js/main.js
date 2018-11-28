document.getElementsByClassName("aye")[0].style.backgroundColor = "#a3a1a1";

var newH1 = document.createElement("h1");
newH1.innerText = "Who's your favorite Marvel character?";

document.getElementById("bar1").appendChild(newH1);

var secondNewH1 = document.createElement("h1");
var text = document.createTextNode("Hero? or Villian?");

secondNewH1.appendChild(text);
document.getElementById("bar2").appendChild(secondNewH1);

var list = [
{
	path: "img/blackpanther.jpg",
	desc: "Black Panther of Marvel Unviverse"
},
{
	path: "img/ironman.jpg",
	desc: "Iron Man of Marvel Unviverse"
	
}, 
{
	path: "img/captinmarvel.jpg",
	desc: "Captain Marvel of Marvel Unviverse"

},
{
	path: "img/redskull.jpg",
	desc: "Redskull of Marvel Unviverse"
}, 
{
	path: "img/ultron.jpg",
	desc: "Ultron of Marvel Unviverse"
}, 
{
	path: "img/thanos.jpg",
	desc: "Thanos of Marvel Unviverse"
},

];

var counter = 0;
var face = document.getElementById("pic");
  	

function imageAction() {

	counter++;

	if(counter >= list.length){
		counter = 0;
	}
  	face.src = list[counter].path;
  	face.alt = list[counter].desc;


};
