const sumAll = function(num1, num2) {
    let firstNum;
    let lastNum;
    if(!Number.isInteger(num1)|| !Number.isInteger(num2)){
        return "ERROR";
    }
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    } 
    if(num1 < num2){
        firstNum = num1;
        lastNum = num2;
    } else if(num1 > num2){
        firstNum = num2;
        lastNum = num1;
    } 

    let sum = 0;
    for(let i = firstNum; i <=lastNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
