function BankAccount(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;

    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ₹${amount}\nNew balance: ₹${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    };

    this.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}\nNew balance: ₹${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    };

    this.getBalance = function () {
        console.log(`Account Balance for ${this.accountHolder}: ₹${this.balance}`);
    };
}

const myAccount = new BankAccount("Gurmukh Singh Dadiala", 1000);

myAccount.getBalance();
myAccount.deposit(500);
myAccount.withdraw(300);
myAccount.withdraw(1500);
myAccount.getBalance();