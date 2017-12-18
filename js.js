"use strict";
var anju="hello";
// function testing(){
// 	alert("hi");
// 	var r="bye";
// 	 q=1;
// }
var string="Hello,Anjula";
console.log(string.length);
console.log(string.split(","));
console.log(string.replace("Hello","Bye"));
var array=[1,2,3,4];
var array2=[8,9,10,11];
console.log(array.toString());
//delete element from 0 no.of elements=1
console.log(array.splice(0,1));
console.log(array.splice(0,2));
//from index 0, delete 1 element and add the rest elements
console.log(array.splice(0,0,24,35,6));
console.log(array.indexOf(3));
console.log(array.indexOf(1));
console.log(array.push(5));
console.log(array.pop());
console.log(array.concat(array2));
console.log(array2.concat(array).sort());
//sort array using js
var array3=[4,3,8,5,7];
 for(var i=0;i<array3.length-1;i++)
 {
   for(var j=i+1;j<array3.length;j++)
   {
   	if(array3[i]>array3[j])
   	{
   		var temp=array3[i];
   		array3[i]=array3[j];
   		array3[j]=temp;
   	}
   }
 }
 for(var i=0;i<array3.length;i++)
 	console.log(array3[i]);
 //find hamming distance between two strings
 //JSON java script object notation
 var myjson={name:"Anjula"};
 myjson.age=20;
 console.log(myjson);
