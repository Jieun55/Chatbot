var time = ""; // 출력할 시간 
var hour = 0; // 시
var min = 0; // 분
var sec = 0; // 초
var h1 = document.getElementsByTagName('h1');
var set; // setTimeout, clearTimeout 함수값을 다룰 변수

function timer(){
    sec++;
    if (sec > 59) {
        sec = 0;
        min += 1;
    }

    if (min > 59) {
        min = 0;
        hour += 1;
    }
    time = hour + "h " + min + "m " + sec + "s";
	h1[0].innerHTML=time;
}

function Start(){
    timer();
    set = setTimeout(Start, 1000);
}

function Stop(){ // 멈춤 버튼
    clearTimeout(set);
}

function Clear(){ // 초기화 버튼
    clearTimeout(set);
    time="0h 0s 0m";
    hour=0; min=0; sec=0;
    h1[0].innerHTML=time;
}