var numbers = [];
// always think of the simplest solution
function getValue (value){
  if (parseInt(value)) {
    numbers.push(value);
    document.getElementById("history-value").innerHTML = numbers.join("");
  }
  getOperator(value)
};

function getOperator (value) {
    if (value ==='clear' || value === 'delete') {
        handleChange(value)
    }
    document.getElementById("history-operator").innerHTML = value

}

function handleChange (value) {
    value === "clear" ?
     numbers = [] : value === 'delete' ?  numbers.reverse().pop() : handleOperators(value)
}

function handleOperators (value) {
    console.log(value)
}