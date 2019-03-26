var i = 0; 	
var images = [];	
var time = 2500;	

var name = localStorage['object'];
createArray();

function createArray(){
	for(var i = 0; i < 4; i++){
		images[i] = "css/img/" + name + "/" + (i + 1) + ".jpg";
	}
	
}

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;