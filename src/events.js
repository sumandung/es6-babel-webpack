import Mychart from './app';

let interval = false, timerData;
const x = new Mychart(5,'h',document.getElementById('mainContainer'),'progress');

function timer(){
	if(!interval){
		interval = true;
		timerData = setInterval(function(){
		x.update();
		},1000);
	} else {
		interval = false;
		clearInterval(timerData);
	}
}
	
	
document.getElementById('update').addEventListener("click", function(){
	x.update();
}, false);

document.getElementById('destroy').addEventListener("click", function(){
	x.destroy();
}, false);

document.getElementById('horizontal').addEventListener("click", function(){
	x.horizontal();
}, false);

document.getElementById('vertical').addEventListener("click", function(){
	x.vertical();
}, false);

document.getElementById('timer').addEventListener("click", function(){
	if(this.innerHTML == "Start Timer"){
		this.innerHTML = "Stop Timer";
	} else {
		this.innerHTML = "Start Timer";
	}
	timer();
}, false);
