	class Mychart {
	constructor(no_of_bars,position){
		this.bars = [];
		this.data = [];
		this.no_of_bars = no_of_bars;
		this.position = position;
		this.timer = 0;
		this.setInterval = false;
		this.update();
	}
	
	update() { 
		this.data = [];
		for(let i = 0; i<this.no_of_bars; i++){
			this.data.push(Math.floor(Math.random()*20)+50);
		}
		if(this.bars.length == 0){
			this.addContainers();
		}
		this.horizontal();
	}
	
	addContainers(){
		let main = document.getElementById('mainContainer');
		for(let i =0; i<this.no_of_bars; i++){
			let d = document.createElement('li');
			d.class = "width";
			d.id = "bar"+i;
			this.bars.push(d);
			main.appendChild(d);
		}
	}
	
	horizontal(){
		for(let i =0; i<this.no_of_bars; i++){
			this.bars[i].className = "height";
			this.bars[i].style.width = this.data[i]+'px';
		}
	}
	
	vertical(){
		for(let i =0; i<this.no_of_bars; i++){
			this.bars[i].className = "width";
			this.bars[i].style.height = this.data[i]+'px';
		}
	}
	
	destroy(){
		let main = document.getElementById('mainContainer');
		main.innerHTML = '';
	}
	
	timer(){
		if(!this.setInterval){
		 this.setInterval = true;
		 this.timer = setInterval(function(){
			this.update();
		 },1000);
		} else {
			this.setInterval = false;
			clearInterval(this.timer);
		}
	}
}

let c = new Mychart(10, 'h');

document.getElementById('update').addEventListener("click", function(){
	c.update();
}, false);

document.getElementById('destroy').addEventListener("click", function(){
	c.destroy();
}, false);

document.getElementById('horizontal').addEventListener("click", function(){
	c.horizontal();
}, false);

document.getElementById('vertical').addEventListener("click", function(){
	c.vertical();
}, false);

document.getElementById('timer').addEventListener("click", function(){
	c.timer();
}, false);
