function myFunction() {
	var x = document.getElementById("msg");
	x.classname = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); },3000);
}
//document.getElementById("userdrop").onclick = function() {myFunction()};
function dropfunction() {
  document.getElementById("userdropdown").classList.toggle("show");
}