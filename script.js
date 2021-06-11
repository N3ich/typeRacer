var startSecond = 0;
var text = document.getElementById('text').innerText;
var textLength = document.getElementById('text').innerText.length;
var started = false;
var start = false;
var myInterval;
var mainText = document.getElementById('text');
var textArea = document.querySelector('textarea');
var i = 0;

var chars = new Array(text.length);

var timerStart = function(){
	if(!start)
	myInterval = setInterval(function() {
			var int = document.getElementById('timer');
			int.textContent++;
			start = true;
	},1000);
	document.querySelector('body').removeEventListener('keydown',timerStart);
}
document.querySelector('body').addEventListener('keydown',timerStart);


var getCurrentInput = function()
{
	var currPosition = textArea.value.length-1;
	var txt = textArea.value;

	if(txt[currPosition]==text[currPosition])
		{
			chars[currPosition] = 1;
		}
	else chars[currPosition] = 0;

	mainText.innerHTML = '';
	var correctChars = 0;
	for (i = 0; i<txt.length; i++)
    {
		if(chars[i] == undefined) break;

		if(chars[i] == 1)
		{
			mainText.innerHTML += '<span class="correct">' + text[i] + '</span>';
			correctChars++;
		};
		if(chars[i] == 0) mainText.innerHTML += '<span class="mistake">' + text[i] + '</span>';
	}
		if(correctChars==text.length)
		{
			textArea.disabled = true;
			clearInterval(myInterval);
			document.getElementById('main').innerHTML += '<p style=" text-align: center">' + 'Your WPM : ' + Math.ceil((text.length)*(60/document.getElementById('timer').textContent)/5) + '</p>';
		}

		mainText.innerHTML += text.slice(i,text.length);	
}

textArea.addEventListener('input',getCurrentInput);