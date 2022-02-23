var light = 0;

function check_text() {	
	var value = document.getElementById("console").value;
	var reply = document.getElementById("catsays");
	console.log(light);

	if(value == "불 좀 꺼줄래?"){
		if(light == 0){
			light++;
			reply.innerHTML = "냥 냐냐냐냥?";
		}
		else if(light == 1){
			light++;
			reply.innerHTML = "싫다냥...";
		}
		else{
			document.body.style.backgroundColor = 'black';
			reply.style.color = "gray";
			reply.innerHTML = "먀옹!!!(너무 어두워!)";
		}
	}

	else if(value == "불 켜줘!") {
		if(light == 0){
			reply.innerHTML = "이미 밝다냥!";
		}
		else if(light == 2){
			light = 0;
			document.body.style.backgroundColor = '#ffffff';
			reply.innerHTML = "불을 켰다냥!";
		}
	}

	else{
		console.log(value);
	}
}