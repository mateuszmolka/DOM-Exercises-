'use strict';
//Utworzenie formy 
var form = document.createElement("form");

//Utworzenie 1  inputu
var inputText1 = document.createElement("input"); 
inputText1.setAttribute('type',"text");
inputText1.setAttribute('name',"firstname");
inputText1.setAttribute('placeholder',"Your first name");
inputText1.style.display="block";
inputText1.style.margin="5px";

//Utworzenie 2 inputu
var inputText2 = document.createElement("input"); 
inputText2.setAttribute('type',"text");
inputText2.setAttribute('name',"firstname");
inputText2.setAttribute('placeholder',"Your last name");
inputText2.style.display="block";
inputText2.style.margin="5px";

//Input button
var inputSurname = document.createElement("input"); 
inputSurname.setAttribute('type',"submit");
inputSurname.setAttribute('value',"Submit");
inputSurname.style.display="block";
inputSurname.style.margin="5px";

//Dodanie  inputów do formy
form.appendChild(inputText1);
form.appendChild(inputText2);
form.appendChild(inputSurname);

//Dodanie formy do body
document.getElementsByTagName('body')[0].appendChild(form);

//Algorytm do wywołania name i surname jesli takie atrybuty istniją w tej formie
inputSurname.addEventListener("click", function(event){
    event.preventDefault()
    var childrenArray = [].slice.call(form.children);
    childrenArray.forEach(function(obj,i){
        if(obj.name=="firstname"||obj.name=="lastname"){
            console.log(obj.value);
        }
    })
});





