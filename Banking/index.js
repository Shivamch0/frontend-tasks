let balance = 1000;
let choice;

do {
    choice = prompt(
        "BANK MENU:\n" +
        "1. Deposit\n" +
        "2. Withdraw\n" +
        "3. Check Balance\n" +
        "4. Exit\n" +
        "Enter your choice:"
    );

    switch(choice) {
        case "1":
            let deposit = Number(prompt("Enter deposit amount:"));
            if(deposit > 0){
                balance += deposit;
                alert("Deposited Successfully. Balance: " + balance);
            } else {
                alert("Invalid amount");
            }
            break;

        case "2":
            let withdraw = Number(prompt("Enter withdraw amount:"));
            if(withdraw > balance){
                alert("Insufficient Balance!");
            } else if(withdraw > 0){
                balance -= withdraw;
                alert("Withdraw Successful. Balance: " + balance);
            } else {
                alert("Invalid amount");
            }
            break;

        case "3":
            alert("Current Balance: " + balance);
            break;

        case "4":
            alert("Thank you for banking!");
            break;

        default:
            alert("Invalid Choice!");
    }

} while(choice !== "4");