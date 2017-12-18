document.getElementById('textid').innerHTML="abc";
// function changeimg(){
// 	document.getElementById("image").src="s.jpg";
// }
console.log(window.innerWidth,window.innerHeight);
console.log(window.location.href);
console.log(window.open("https://facebook.com"));
var x=document.getElementById('x');
// if(window.innerwidth<500){
// 	x.innerHTML = "<img src='d.jpg'>"	
// }else{
// 	x.innerHTML = "<img src='e.jpg'>"
// }
function helloworld()
{
	x.src="e.jpg";
}
function myfunc(){
	alert("Abchdsk");
}
function submitform(){
	document.getElementById('f1').submit();
}
function resetform(){
	document.getElementById('f1').reset();
}
function random(){
	alert(document.forms[1].animals.value);
}
console.log(document.getElementById('a').value);