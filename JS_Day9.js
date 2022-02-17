var Whiplash = new Movie("위플래쉬", "2015", "드라마")
var SwingKids= new Movie("스윙 키즈", "2018", "드라마")
var Parasite= new Movie("기생충", "2019", "드라마")
var h1=document.getElementsByTagName('h1');
var h3=document.getElementsByTagName('h3');

function Movie(name, relesedate, gerne){
    this.name = name;
	this.relesedate = relesedate;
	this.gerne = gerne;
}

function ChangeWhiplash(){
    h1[0].innerHTML= Whiplash.name;
    h3[0].innerHTML= "- " + Whiplash.relesedate;
    h3[1].innerHTML= "- " + Whiplash.gerne;
}

function ChangeSwingKids(){
    h1[0].innerHTML= SwingKids.name;
    h3[0].innerHTML= "- " + SwingKids.relesedate;
    h3[1].innerHTML= "- " + SwingKids.gerne;
}

function ChangeParasite(){
    h1[0].innerHTML= Parasite.name;
    h3[0].innerHTML= "- " + Parasite.relesedate;
    h3[1].innerHTML= "- " + Parasite.gerne;
}