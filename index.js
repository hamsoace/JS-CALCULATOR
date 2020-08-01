// data = {
//   numbers: [], 
//   operator: ''
// }
function getNumber(value){
    var display = document.getElementById("output");

  if(value=="="){
    var all-display.value.split(" ")
    firstSet=parseFloat(all[0]);
    op=all[1];
    secondSet=parseFloat(all[2]);

    var display=document.getElementById("result")

    if (secondSet=0){
      display.value="divison by zero!"
    }

    switch(op)
    {
      case '+':
        result = firstSet + secondSet;
        display.value=result;
        break;
      case '-':
        result = firstSet - secondSet;
        display.value=result;
        break;
      case '*':
        result = firstSet*secondSet;
        display.value=result;
        break;
      case '/':
        result = firstSet/secondSet;
        display.value=result;
        break;
      case '%':
        result = firstSet%secondSet;
        display.value=result;
        break;  
      default:

      break;
    }
  }
  else if(display.value == '0' && value == '0'){
    return null;
  }

  else if(screen.value=='0' && !((value =="*" || value == "/") || (value == "+" || value == "-") || (value == "%"))){
    display.value=value;
  }
  else if(!((value=="*" || value=="/" )||((value =="+"|| value=="-")|| (value=="%")))){
    display.value+=value;
  }
  else if (op=="0" && ((value=="*" || value=="/" )|| ((value =="+"|| value=="-")|| (value=="%"))))
    {
    display.value+=" ";
    display.value+=value;
    display.value+=" ";
    op=value;
    }
    
    else
    {
        return;
    }
}

function delete(del){
  var display=document.getElementById("output");
  display.value='';
  op=0;
  del=0;
  var firstSet = "0";
  var secondSet = "0";
  var dot= 0;

}

function dot(dt){
  if(dot==0){
    var display=document.getElementById("output");
    display.value+=dt;
    dot ="recorded"
  }
  else{
    return;
  }
}

var all=display.value.split(" ");
    firstSet=parseFloat(all[0]);
    op=all[1];
    secondSet=parseFloat(all[2]);



// var operator, firstSet = [], secondSet = []


// function getNumber (value){

//   if (!operator && parseInt(value)) {
//     firstSet.push(value);
//     document.getElementById("history-value").innerHTML = firstSet.join("");
//     checkCurrentOperator()
//   }
//   else if(operator && parseInt(value)){
//     secondSet.push(value);
//     document.getElementById("history-value").innerHTML = secondSet.join("");
//     checkCurrentOperator()
//   }
//   else(operator && parseInt(value)){
//     operator.onclick=function(event){
//       document.getElementById("history-value").innerHTML=value;
//     }
//   }
// };
// function checkCurrentOperator () {
//  console.log(operator)
// }
// //function handleDelete


// function getOperator (value) {operator = value
//   if(firstSet.length !==0){
//     firstSet.push(value);
//     document.getElementById("history-value").innerHTML = firstSet.join("");

//   }else if (secondSet.length !==0) {
//     secondSet.push(value);
//     document.getElementById("history-value-two").innerHTML = secondSet.join("");
//   }
// }

// function handleChange (value) {
//     value === "clear" ?
//      numbers = [] : value === 'delete' ?  numbers.reverse().pop() : handleOperators(value)
// }

// function handleOperators (value) {
//     console.log(value)
// }

// function numbers(value){
//   var screen=document.getElementById("history-value");

//   function number()
//   if (value == '='){
//     var all=screen.value.split("")
//     firstpart=parseFloat(all[0])
//     op=all[1];
//     secondpart=parseFloat(all[2]);
    
//     var screen=document.getElementById("history-value");

//     if (secondpart==0){
//       second.value="division by zero!"
//     }
//     switch(op){
//       case '+':
//         result=firstpart+secondpart; 
//         screen.value=result;
//         break;

//     }
//   }
// }