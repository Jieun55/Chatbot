var mogako = new PhoneNum("모각코", "010-1234-5678");
var h1=document.getElementsByTagName('h1');
var h3=document.getElementsByTagName('h3');

function PhoneNum(name, num){
    this.name = name;
    this.num = num;
}
function change(){
    h1[0].innerHTML=mogako.name;
    h3[0].innerHTML=mogako.num;
}
function Calling() {
    setTimeout(change, 2000);
}