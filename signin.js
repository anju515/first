function validate()
{
	var x=document.forms[0].uname.value;
	var y=document.forms[0].psw.value;

	var myarr=JSON.parse(localStorage.getItem("data"));
    for(var i=0;i<myarr.length;i++)
    {
    	if(myarr[i].Username==x && myarr[i].Password==y)
    		alert("abcd");
    }
}