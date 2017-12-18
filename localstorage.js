
// 	function signup(){
	
// 	localStorage.setItem(x,y);
// }
function signup(){
var x=document.getElementById("uname").value;
var y=document.getElementById("psw").value;
if (localStorage.getItem("data")==true)
	var arr=JSON.parse(localStorage.getItem("data"));
else
	var arr=[];
var myobj={"Username":x,"Password":y};
arr.push(myobj);
var json=JSON.stringify(arr);
localStorage.setItem("data",json);	
	// alert(x);
	// alert(y);
}
