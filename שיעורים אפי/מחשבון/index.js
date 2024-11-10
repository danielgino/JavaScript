var result="";
var message=""
var selectedMathButton=null;
function funcButton(button){
var firstNumber=parseFloat(document.getElementById('FirstNumber').value);
var secondNumber=parseFloat(document.getElementById('SecondNumber').value);
if(selectedMathButton){
    result=checkButton(selectedMathButton,firstNumber,secondNumber);
    message="The Answer is: ";
    document.getElementById('result').innerText=message+result;
}
else{
    document.getElementById('result').innerText="Chose Math Opreation";

}

}


 function checkButton(selected,firstNumber,secondNumber){
if (selected==='Plus'){
    result=firstNumber+secondNumber;
}
else if(selected==='Minus'){
    result=firstNumber-secondNumber;
}
else if (selected==='Multiply'){
    result=firstNumber*secondNumber;
}
else if(selected==='Dived'){
    if(secondNumber===0){
    
    }
    else{
        result= firstNumber/secondNumber;
    }
        
}
return result;
 }
 function selectMathButton(button){
    selectedMathButton=button.id;
 }