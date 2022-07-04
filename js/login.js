var hand = document.getElementById("hands");
var animation = document.getElementById("animcon");
function closeye(){
	animation.style.backgroundImage="url(../assets/gerak.gif)";
	hand.style.marginTop="0%";
}
function openeye(){
	animation.style.backgroundImage="url(../assets/buka.gif)";
	hand.style.marginTop="110%";
}