'use strict';

function obliczZysk(wplata,iloscLat,okresKapitalizacji,oprocentowanie,podatek){
    
    if(podatek){
        var oprocentowaneOpodatkowanie=oprocentowanie*(81/100);
    }else{
        var oprocentowaneOpodatkowanie=oprocentowanie;
    }
    var potega=iloscLat*okresKapitalizacji;
    var podstawa=(1+(oprocentowaneOpodatkowanie/okresKapitalizacji));
    var kapital=wplata*Math.pow(podstawa,potega);
    
    return kapital.toFixed(2);
}

function oblicz(event){
    event.preventDefault();
   // document.getElementById("wynik").innerHTML="5";
    var wplata=parseInt(document.getElementById('in-cash').value);
    var iloscLat=parseInt(document.getElementById('years').value);
    var okresKapitalizacji=parseInt(document.getElementById('capitalise').value);
    var oprocentowanie=parseInt(document.getElementById('percent').value)/100;
    
    if(document.getElementById("belka").checked){
        var podatek=true;
    }else{
        var podatek=false;
    }
    
    var wynik=obliczZysk(wplata,iloscLat,okresKapitalizacji,oprocentowanie,podatek);
    document.getElementById("wynik").innerHTML=wynik;
}

document.getElementById("triggerButton").addEventListener('click',oblicz)
