/*
=== TryItYourSelf HTML5 Editor  ===
Contributors: ulmdesign - Francesco De Stefano
Demo link: http://ulmdevice.altervista.org/TryItYourSelfHTML5/
Tags: html5 editor online, API HTML5 filesystem, highlight Code HTML, CSS, JavaScript

Release: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html


== Description ==

Edit HTML5 online, with highlight code and filesystem to save your work


== Installation ==

1. Upload folder in your web server
2. Insert in your address address bar: http://yourdomain/TryItYourSelfHTML5/ and start to design online your web application


== Frequently asked questions ==

= A question that someone might have =
If you want to contact me for assistance can do so by sending an email to: ulmdesign@mediamaster.eu - subject: TryItYourSelfHTML5
Complete Support visit this page http://ulmdesign.mediamaster.eu/contatti

== Upgrade Notice ==
http://ulmdevice.altervista.org/TryItYourSelfHTML5/
*/

/*
se desideri impiegare jquery decommenta il codice sotto: */
/*
$(document).ready(function() {
   $("#idinput").keyup( function() {
   $("#idoutput").html($("#idinput").val());
} );
});

*/
var showist = document.getElementById('mostra');
var hideist = document.getElementById('nascondi');
var apriFile = document.getElementById('apriFile');
var submit = document.getElementById('idinput');
var btn = document.getElementById('btn');
var anteprima = document.getElementById('preview');
var editor = CodeMirror.fromTextArea(submit, {
    mode: "text/html",
    matchhighlight: true,
   	lineNumbers: true,
    matchBrackets: true,
    autoCloseTags: true,
    highlightSelectionMatches: {showToken: /\w/},
   	readOnly: false
  });
  
  function saveinputHtml(inputData) {
  	$(inputData).blur(function() {
			localStorage.setItem('htmlData', this.value);
		});
			if (localStorage.getItem('htmlData')) {
			$(inputData).value = localStorage.getItem('htmlData'); 
		}
		return inputData;
  }
 function OnInput () {
	var input = document.getElementById('idinput').value;
	input = editor.getValue();
	var output = document.getElementById('idoutput');
	 output.innerHTML = input;
	 saveinputHtml(input);
} 
function hide() {
  target.setAttribute("class","hide");  
}

function display() {
  target.setAttribute("class","show");  
}

function saveTextAsFile() {
	var textToWrite = document.getElementById('idoutput').innerHTML;
	var textFileAsBlob = new Blob([textToWrite], {type:'application/xhtml+xml; charset=utf-8'});
	var fileNameToSaveAs = document.getElementById("inputSaveAs").value;
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null) {
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
      downloadLink.click();
	}
  
	else
	{
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
	function saveHtml() {
	    textToWrite.blur(function() {
			localStorage.setItem('htmlData', this.value);
		});
			if (localStorage.getItem('htmlData')) {
			textToWrite.value = localStorage.getItem('htmlData'); 
		}
	}
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("openFile").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("idinput").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
function code() {
  editor.on();
  textToWrite = editor.getValue();
  var edithtml = document.getElementsByTagName('textarea')[1];
  edithtml = editor.getValue();
  saveinputHtml(edithtml);           
}

 function riedita(){
   	location.reload();
    localStorage.clear(); 
}

function anno() {
  var year = new Date();
  var write = document.getElementById('anno');
  write.innerHTML = year.getFullYear();
}

window.onload = anno();
showist.addEventListener('click', display, true);
hideist.addEventListener('click', hide, true);
btn.addEventListener('click', saveTextAsFile, true);
apriFile.addEventListener('click', loadFileAsText, true);
apriFile.addEventListener('click', riedita, true);
anteprima.addEventListener("click", OnInput, true);
anteprima.addEventListener("click", code, true);
