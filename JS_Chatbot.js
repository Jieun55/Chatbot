function check_text() {
	var value = document.getElementById("console").value;
	var catsays = document.getElementById("catsays");
	
	if(value == "불 켜줘!") {
		document.body.style.backgroundColor = '#ffffff';
		catsays.innerHTML = "불을 켰다옹!";
	}
	else if(value == "불 좀 꺼줄래?"){
		document.body.style.backgroundColor = 'black';
		catsays.style.color = "gray";
		catsays.innerHTML = "먀옹!!!(너무 어두워!)";
	}
	else{
		console.log(value);
	}
}