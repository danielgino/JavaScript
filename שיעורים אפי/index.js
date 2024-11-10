var number1="";
var number2="";
var result=""
var buttonType="";

function showValue(button){
    number1+=button.value;
    document.getElementById('output').innerText=number2+buttonType+number1;




}

function mathOperation(button){
    buttonType=button.value;
    number2=number1;
    number1="";
}
function cal(){
    var realNumber1=parseInt(number1);
    var realNumber2=parseInt(number2);
  
if(buttonType==='+'){
 result=realNumber1+realNumber2;
}
document.getElementById('result').innerText=result;
return result;
}

function clear(){
number1="";
number2="";
result=""
buttonType="";
document.getElementById('output').innerText = " ";
document.getElementById('result').innerText = " ";

}

