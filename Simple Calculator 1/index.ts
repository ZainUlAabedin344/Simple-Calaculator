#! /usr/bin/env node 

import inquirer from "inquirer";

const answer= await inquirer.prompt([
    {message:"Enter Your First Number",type:"number",name:"firstNumber"},
    {message:"Enter Your Second Number",type:"number",name:"secondNumber"},
    {
        message:"Select one of the operator to perform action",
        type:"list",
        name:"operator",
            
        choices: ["Addition","Subtraction","Multiplication","Division"],
    }
]);
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
 } else if(answer.operator === "Multiplication"){
console.log(answer.firstNumber * answer.secondNumber);
    } else if(answer.operator === "Division"){
        console.log(answer.firstNumber / answer.secondNumber);
    }
    else{
        console.log("Please choose the correct operator");
    }
