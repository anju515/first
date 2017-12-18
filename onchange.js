function random(){
	console.log(document.forms[0].animals.value);
}
// validate
function validate(){
	var x=document.forms[0].uname.value;
	var y=document.forms[0].psw.value;
	if(x=="abc" && y=="abc")
		return true;
	else
		return false;
	
}