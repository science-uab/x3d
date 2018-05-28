window.addEventListener("deviceorientation", on_device_orientation);

var radius = 20;

function on_device_orientation(e)
{
	document.getElementById("id_orientation").innerHTML = e.alpha.toFixed(1) + " " + e.beta.toFixed(1)+ " " + e.gamma.toFixed(1);
	var viewpoint = document.getElementById("id_viewpoint");
	var z = radius * Math.cos (e.alpha * Math.PI / 180); 
	var x = radius * Math.sin (e.alpha * Math.PI / 180);
	viewpoint.setAttribute("position", x + " 0 " + z);
	viewpoint.setAttribute("orientation", "0 1  0 " + e.alpha * Math.PI / 180);
}