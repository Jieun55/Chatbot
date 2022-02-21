function check_text() {
	var value = document.getElementById("console").value;
	var catsays = document.getElementById("catsays")
	
	if(value == "alert") {
		alert("경고창이 떴습니다.");
	}
	else if(value == "불 좀 꺼줄래?"){
		document.body.style.backgroundColor = 'black';
		catsays.style.color = "gray";
		catsays.innerHTML = "먀옹!!!"
	}
	else{
		console.log(value);
	}
}