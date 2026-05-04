let n1 = 45
let n2 = 56
let operator = "+";

switch(operator){
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
    default:
        console.log("invalid operator");
}