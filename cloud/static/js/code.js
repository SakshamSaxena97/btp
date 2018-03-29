function saveTextAsFile()
{
	var textToSave = document.getElementById("inputTextToSave").value;
	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	downloadLink.href = textToSaveAsURL;
	downloadLink.onclick = destroyClickedElement;
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];
	var name = fileToLoad['name'].split(".");
	var extension = name[1];
	x = document.getElementsByClassName("city");
	for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
	}
	if(extension == "py"){
		 var cityName = "Python";
		 document.getElementById(cityName).style.display = "block";
		 document.getElementById("4").className += " w3-red";
	}
	else if(extension =="c"){
		var cityName = "C";
		document.getElementById(cityName).style.display = "block";
		document.getElementById("0").className += " w3-red";
	}
	else if(extension =="cpp"){
		var cityName = "C++";
		document.getElementById(cityName).style.display = "block";
		document.getElementById("1").className += " w3-red";
	}
	else if(extension =="pl"){
		var cityName = "Perl";
		document.getElementById(cityName).style.display = "block";
		document.getElementById("3").className += " w3-red";
	}
	else if(extension =="java"){
		var cityName = "Java";
		document.getElementById(cityName).style.display = "block";
		document.getElementById("2").className += " w3-red";
	}
	else if(extension =="scala"){
		var cityName = "Scala";
		document.getElementById(cityName).style.display = "block";
		document.getElementById("5").className += " w3-red";
	}
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent)
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		// console.log(textFromFileLoaded);
		document.getElementById("inputTextToSave"+extension).value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}
