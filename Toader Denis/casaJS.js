window.addEventListener("deviceorientation", on_device_orientation)

var aidi = "";

function on_device_orientation(e)
{
	//document.getElementBy("orientation_id").innerHTML = e.alpha.toFixed(1);/* + " " + e.beta.toFixed(1) + " " + e.gamma.toFixed(1);*/
	//var pos = viewpoint.getAttribute("orientation");
	var viewpoint = document.getElementsByClassName("viewpoint");
	
	
	var i;
	for (i = 1; i < viewpoint.length; i++) {
		/*var bind= viewpoint[i].getAttribute("set_bind");
		if(bind == "true" || bind == true)*/
			viewpoint[i].setAttribute("orientation","0 1 0 " + e.alpha * Math.PI / 180);
	}
	
}

function view(nume) {
	//document.getElementById(nume).setAttribute('set_bind','true');
	aidi=nume;
}
