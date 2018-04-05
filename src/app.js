
	class Mychart {
	constructor(no_of_bars,position,container,progressDiv){
		this.bars = [];
		this.data = [];
		this.no_of_bars = no_of_bars;
		this.position = position;
		this.timer = 0;
		this.container = container;
		this.progressDiv = progressDiv;
		this.containerStatus = false;
		this.update();
	}
	
	update() { 
		//this.data = [];
		
		for(let i = 0; i<this.no_of_bars; i++){
			this.data[i] = (Math.floor(Math.random()*20)+50);
		}
		if(!this.containerStatus){
			this.bars = [];
			this.addContainers();
		} 
		if(this.position == 'h'){
			this.horizontal();
		} else {
			this.vertical();
		}
	}
	
	addContainers(){
		this.containerStatus = true;
		let main = this.container;
		main.innerHTML = '';
		var me = this;
		for(let i =0; i<this.no_of_bars; i++){
			let d = document.createElement('li');
			d.className = "width";
			this.bars.push(d);
			main.appendChild(d);
			d.addEventListener('mouseover', function(){
				if(this.className == "width"){
					var ht = this.style.height.split('px');
					document.getElementById(me.progressDiv).innerHTML = 'Progress : '+(ht[0])+'%';
				} else {
					var wd = this.style.width.split('px');
					document.getElementById(me.progressDiv).innerHTML = 'Progress : '+(wd[0])+'%';
				}
			});
		}
	}
	
	horizontal(){
		this.position = 'h';
		for(let i =0; i<this.no_of_bars; i++){
			this.bars[i].style.width = this.data[i]+'px';
			this.bars[i].className = "height";
		}
	}
	
	vertical(){
		this.position = 'v';
		for(let i =0; i<this.no_of_bars; i++){
			this.bars[i].style.height = this.data[i]+'px';
			this.bars[i].className = "width";
		}
	}
	
	destroy(){
		let main = this.container;
		main.innerHTML = '';
	}
}


module.exports = Mychart;