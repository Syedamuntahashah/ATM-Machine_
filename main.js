#! /usr/bin/env node
import inquirer from "inquirer";
let accBalance = 50000; // Dollars
let pinCode = 2345;
let pinNumber = await inquirer.prompt([
    {
        name: "mypin",
        type: "number",
        message: "Enter your pincode: ",
    }
]);
if (pinNumber.mypin === pinCode) {
    console.log("you entered correct pin code_");
    let operation = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "please select any 1 option: ",
            choices: ["Transaction", "check balance", "fastcash"],
        },
    ]);
    if (operation.action === "Transaction") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "please enter your amount",
            },
        ]);
        if (accBalance < amountAnswer.amount) {
            console.log("you don't have enough balance to transact this amount");
        }
        else {
            accBalance -= amountAnswer.amount;
            console.log(`your remaining balance is: ${accBalance}`);
        }
    }
    else if (operation.action === "check balance") {
        console.log(`your balance is: ${accBalance}`);
    }
    else if (operation.action === "fastcash") {
        let fastCash = await inquirer.prompt([
            {
                name: "selectamount",
                type: "number",
                message: "please select the amount that you wanna withdraw: ",
                choices: [10000, 20000, 30000, 40000, 50000],
            }
        ]);
        accBalance -= fastCash.selectamount;
        console.log(`your account balance is ${accBalance}`);
    }
}
else
    (console.log("please enter correct pin code !"));
