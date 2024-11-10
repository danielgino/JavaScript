var answer1="";
var answer2="";


function makeResults(){
 var intrests=document.getElementsByName('interest');
 var question1= document.getElementById('question1').innerText;
var question2= document.getElementById('question2').innerText;
 var food=document.getElementsByName('food');
 for(let i=0; i<intrests.length;i++ ){
    if(intrests[i].checked){
answer1=question1+":" +intrests[i].value;
break
    }
 }
 for(let i=0; i<food.length;i++ ){
    if(food[i].checked){
answer2=question2+ ":" +food[i].value;
break
    }
 }

 document.getElementById('result1').innerText=answer1;
 document.getElementById('result2').innerText=answer2;


}
