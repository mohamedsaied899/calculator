let outputValue = document.getElementById("output-value");
let operator = document.getElementsByClassName("operator")
let number = document.getElementsByClassName("number")
let historyValue = document.getElementById("history-value");

// For Result
function getHistory(){
    return historyValue.innerText;
}
function printHistory(num){
   return historyValue.innerText = num;
}

function getOutput(){
    return outputValue.innerText;
}
function printOutput(num){
    if(num == ""){
         outputValue.innerText = num;
    }else{
         outputValue.innerText = getFormatedNumber(num);
    }
}

// make Formate Number
function getFormatedNumber(num){
    if(num == "-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}  

function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));   
}
// Handle the Logic of Operator
for(let i = 0; i< operator.length; i++){
    operator[i].addEventListener("click", function(){
        if(this.id == "clear"){
            printOutput("")
            printHistory("")
        }
        else if(this.id == "backspace"){
            let output = reverseNumberFormat(getOutput()).toString();
            if(output){
                output = output.substring(0, output.length - 1);
                printOutput(output)
            }
        }else{
            let output = getOutput();
            let history = getHistory();
            if(output != ""){
                output = reverseNumberFormat(output);
                history += output;
                if(this.id == "="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    history += this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}
// Handle the Logic of Number
for(let i = 0; i< number.length; i++){
    number[i].addEventListener("click", function(){
        let output = reverseNumberFormat(getOutput());
        if(output != NaN){
            output += this.id;
            printOutput(output)
        }
    });
}