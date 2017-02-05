'use strict';
var objButton=document.createElement('button');
var objParagraph1=document.createElement('p');
var objParagraph2=document.createElement('p');


var pText1=document.createTextNode("Paragraf pierwszy");
var pText2=document.createTextNode("Paragraf drugi");
var pTextButton=document.createTextNode("Zmień kolorki");

objParagraph1.appendChild(pText1);
objParagraph2.appendChild(pText2);
objButton.appendChild(pTextButton);

objButton.onclick=changeColor;

var body= document.body;
body.appendChild(objParagraph1);
body.appendChild(objParagraph2);
body.appendChild(objButton);

function changeColor(){
    var randNumber1= Math.round(Math.random()* (255));
    var randNumber2= Math.round(Math.random()* (255));
    var randNumber3= Math.round(Math.random()* (255));
    var randNumber4= Math.round(Math.random()* (255));
    var randNumber5= Math.round(Math.random()* (255));
    var randNumber6= Math.round(Math.random()* (255));
    
    var firstColor= "#"+(randNumber1).toString(16)+(randNumber2).toString(16)+(randNumber3).toString(16);
    var secondColor= "#"+(randNumber4).toString(16)+(randNumber5).toString(16)+(randNumber6).toString(16);
    
    console.log(randNumber1.toString(16));
    
    objParagraph1.style.backgroundColor=firstColor;
    objParagraph2.style.backgroundColor=secondColor;
}