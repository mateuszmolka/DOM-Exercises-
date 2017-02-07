'use strict';

var currentValueGlobal = document.getElementById("main-input");

currentValueGlobal.setAttribute("value", "");

var clearVariable=false;

function getValueToTheConsole(e){
    var currentValue=currentValueGlobal.getAttribute("value");
    var appendValue=e;
    var newValue;
    
    
    //ZABEZPIECZENIE PRZED WPISANIE 2 razy * / + lub - 
    var pattern = new RegExp(/[-,+,*,/,=,.]/);
    var canNotAddMulySumDiv1 = pattern.test(currentValue[currentValue.length-1]);
    var canNotAddMulySumDiv2 = pattern.test(appendValue);


    
    var currentValueLastPart=currentValue.split(/[-,+,*,/]/).reverse()[0];
//    Dodatkowy warunek czy nast liczba jest wpisywana po wyniku
    if(!clearVariable){
        if(currentValueLastPart.split("")[0]=="0" &&currentValueLastPart.split("")[1]!="." && !canNotAddMulySumDiv2){
        //  Warunek aby po naciśnięciu 0 można było tylko nacisnac "." dodatkowo jesli zero zostało juz wciśniete i wciśniemy jakąś inna liczbę zmieni 0 na nią
        var helpVariable=currentValue.split("");
        helpVariable[helpVariable.length-1]=appendValue;
        newValue=helpVariable.join("");
        currentValueGlobal.setAttribute("value", newValue);
        }
        else if(canNotAddMulySumDiv1 && canNotAddMulySumDiv2){
            currentValueGlobal.setAttribute("value", currentValue);
        }
        else if(currentValueLastPart.indexOf(".")!="-1" && appendValue=="."){
            // Warunek aby była tylko jedna . itd w wyrażeniach
            currentValueGlobal.setAttribute("value", currentValue);
        }
        else if(currentValue=="" && canNotAddMulySumDiv2){
            // Czyści pole inputu
            currentValueGlobal.setAttribute("value", "");
        }
        else if(appendValue=="AC"){
            // Czyści pole inputu
            currentValueGlobal.setAttribute("value", "");
        }
        else if(appendValue=="=" && !canNotAddMulySumDiv1){
            var evaluateValue=eval(currentValue);
            currentValueGlobal.setAttribute("value", evaluateValue);
            clearVariable=true;
        }
        else{
            //Normalny wpis
            newValue=currentValue+appendValue;
            currentValueGlobal.setAttribute("value", newValue);
        }
    }else{
        if(canNotAddMulySumDiv2 || appendValue=="AC"){
            currentValueGlobal.setAttribute("value", "");
        }else{
            currentValueGlobal.setAttribute("value", appendValue);
            clearVariable=false;
        } 
    }
    
    
}

