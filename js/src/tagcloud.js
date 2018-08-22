function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} 
	else {
		window.onload = function() {
			oldonload();func();
		}
	}
}

function DblHelix(n, rx, ry, rz) {
  var a = Math.PI / n, i, j, p = [],
    z = rz * 2 / n;
  for(i = 0; i < n; ++i) {
    j = a * i;
    if(i % 2)
      j += Math.PI;
    p.push([rx * Math.cos(j),
      rz - z * i,
      ry * Math.sin(j)]);
  }
  return p;
}

addLoadEvent(function() {
	console.log('tag cloud plugin rock and roll!'); 
	try { 
		//TagCanvas.textFont = 'Trebuchet MS, Helvetica, sans-serif'; 
		TagCanvas.textFont = 'Helvetica, Arial, sans-serif';
		//TagCanvas.bgColour = '#d9a7c7';
		TagCanvas.textColour = '#414345'; 
		TagCanvas.textHeight = 25; 
		TagCanvas.outlineColour = '#ffedbc'; 
		TagCanvas.outlineMethod = 'block'; 
		TagCanvas.outlineOffset = 5; 
		TagCanvas.maxSpeed = 0.06; 
		TagCanvas.minBrightness = 0.2; 
		TagCanvas.depth = 0.86; 
		TagCanvas.pulsateTo = 0.6; 
		TagCanvas.initial = [0.1,-0.1]; 
		TagCanvas.decel = 0.98; 
		TagCanvas.reverse = true; 
		TagCanvas.hideTags = false; 
		TagCanvas.shape = 'DblHelix';
		TagCanvas.lock = 'Y';
		TagCanvas.radiusX = 1;
		TagCanvas.radiusY = 1;
		TagCanvas.radiusZ = 1;
		TagCanvas.shadow = '#ccc'; 
		TagCanvas.shadowBlur = 3; 
		TagCanvas.weight = false; 
		TagCanvas.imageScale = null; 
		TagCanvas.fadeIn = 1000; 
		TagCanvas.clickToFront = 600; 
		TagCanvas.Start('resCanvas'); 
		TagCanvas.tc['resCanvas'].Wheel(false)
	} catch(e) {
		console.log(e); 
		document.getElementById('myCanvasContainer').style.display = 'none'; 
	} 
});