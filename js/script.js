 var colorElem = ['#00ffff', '#ff00ff', '#008000', '#ff4500', "#000080", "#000080", "#ff0000", "#008000", "#ffff00", "#00ffff", '#ff4500', "#ffff00", '#ff00ff', "#808000", "#ff0000","#808000"];
 var openElem = [];
 var idOpenElem = [];
 var count = 16;

 for (var i = colorElem.length - 1; i > 0; i--) {
    var x = colorElem[i];
    var y = Math.floor(i*Math.random());
    colorElem[i] = colorElem[y];
    colorElem[y] = x;
}

 function changeBg(el) {
 	if (document.getElementById(el.id).style.backgroundColor == "transparent") return;
 	if (document.getElementById(el.id).style.backgroundImage == "none") return;
 	el.style.backgroundImage = "none";
 	n = +el.id-1; 	
 	el.style.backgroundColor = colorElem[n];
 	openElem.push(colorElem[n]);
 	idOpenElem.push(el.id);
 	setTimeout(timeOut, 300);

	function timeOut()	{
		if (idOpenElem.length > 1) {
			if (openElem[0] == openElem[1]) {
				for (var i = 0; i < 2; i++) {
					document.getElementById(idOpenElem[i]).style.backgroundColor = "transparent";
					document.getElementById(idOpenElem[i]).style.borderColor = "transparent";
					count--;
					if (count == 0) {
						alert("GREAT JOB!!! If you want to replay, please, reload the page.");
					}
				}
			} else {
				for (var i = 0; i < 2; i++) {
					document.getElementById(idOpenElem[i]).style.backgroundImage = 'url(images/up.png)';
				}
			}
			openElem = [];
			idOpenElem = [];
		}
	}	
}	
