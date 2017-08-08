define(function(){
	
	var bu = document.querySelectorAll('.box button');
	var box = document.querySelectorAll('.box div');
	bu.forEach(function(ele,index){
		bu[index].onclick = function(){
			for(var i=0; i<bu.length; i++){
				bu[i].className = '';
				box[i].classname = '';
			}
			this.className = 'on';
			box[index].className = 'on';
		}
	})
	
	
})