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
var highlight = document.getElementById('highlight');
var submit = document.getElementById('idinput');
var btn = document.getElementById('btn');
var newdoc = document.getElementById('nuovo');
function OnInput () {
var input = document.getElementById('idinput').value;
var output = document.getElementById('idoutput');
 output.innerHTML = input;
  function saveHtml() {
	input.blur(function() {
		localStorage.setItem('htmlData', this.value);
	});
		if (localStorage.getItem('htmlData')) {
		inputData.value = localStorage.getItem('htmlData'); 
	}
	}
}
function getAllElementsWithAttribute(attribute) {
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0; i < allElements.length; i++)
  {
    if (allElements[i].getAttribute(attribute))
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}
function hide() {
  target.setAttribute("class","hide");  
}

function display() {
  target.setAttribute("class","show");  
}

function saveTextAsFile()
{
	var textToWrite = document.getElementById('idinput');
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
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
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var fileToLoad = document.getElementById("openFile").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("idinput").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
function code() {
CodeMirror.fromTextArea(submit, {
    mode: "text/html",
    matchhighlight: true,
   lineNumbers: true,
    matchBrackets: true,
    autoCloseTags: true,
    highlightSelectionMatches: {showToken: /\w/},
   readOnly: false,
   OnBlur: function(){save()}
  }); 
   var inputData = submit;
    inputData.blur(function() {
		localStorage.setItem('htmlData', this.value);
	});
		if (localStorage.getItem('htmlData')) {
		inputData.value = localStorage.getItem('htmlData'); 
	}
   highlight.style.display = 'none';  
            
}

function riedita(){
    var alertuser = confirm("Attention! If you active highlight code and go back to normal mode you lose the changes");
        if (alertuser==false) {
            null
        }
            else {
               location.reload();
              } 
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
//btn.addEventListener('click', code, true);
newdoc.addEventListener('click', riedita, true);
highlight.addEventListener('click', code, true);
submit.addEventListener("keyup", OnInput, true);
