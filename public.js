// 滑动矩形效果
function set_page_num(page_num){
	sessionStorage.setItem("key", page_num);
}
function sliding_rac(){
	// 读取关键词
	var key = sessionStorage.getItem("key");
	// 获取myclass
	var obj= document.getElementsByClassName('myclass')[0];
	if(key == 11){
		obj.className = 'ani11';
	}
	else if(key == 12){
		obj.className = 'ani12';
	}
	else if(key == 13){
		obj.className = 'ani13';
	}
	else if(key == 14){
		obj.className = 'ani14';
	}
	else if(key == 21){
		obj.className = 'ani21';
	}
	else if(key == 22){
		obj.className = 'ani22';
	}
	else if(key == 23){
		obj.className = 'ani23';
	}
	else if(key == 24){
		obj.className = 'ani24';
	}
	else if(key == 31){
		obj.className = 'ani31';
	}
	else if(key == 32){
		obj.className = 'ani32';
	}
	else if(key == 33){
		obj.className = 'ani33';
	}
	else if(key == 34){
		obj.className = 'ani34';
	}
	else if(key == 41){
		obj.className = 'ani41';
	}
	else if(key == 42){
		obj.className = 'ani42';
	}
	else if(key == 43){
		obj.className = 'ani43';
	}
	else if(key == 44){
		obj.className = 'ani44';
	}
}

// 设置一键复制邮箱
function copy_email(){
//	var copy = document.getElementById('my_email').innerHTML;
//	copy.select();
//	document.execCommand("copy");

}