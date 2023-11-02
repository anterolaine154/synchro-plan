Let's generate a JavaScript code that simulates a simple banking system. The code will include functionalities such as creating a customer account, making deposits and withdrawals, transferring funds between accounts, and generating account reports. The filename for this code will be "bankingSystem.js".

```javascript
// bankingSystem.js

// Class representing a bank account
class BankAccount {
  constructor(accountNumber, accountHolder, initialDeposit) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialDeposit;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: 'Deposit',
      amount: amount,
      timestamp: new Date().toLocaleString()
    });
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({
        type: 'Withdrawal',
        amount: amount,
        timestamp: new Date().toLocaleString()
      });
    } else {
      console.log('Insufficient funds. Transaction failed.');
    }
  }

  transfer(amount, recipientAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      recipientAccount.balance += amount;
      this.transactions.push({
        type: 'Transfer to: ' + recipientAccount.accountNumber,
        amount: amount,
        timestamp: new Date().toLocaleString()
      });
      recipientAccount.transactions.push({
        type: 'Transfer from: ' + this.accountNumber,
        amount: amount,
        timestamp: new Date().toLocaleString()
      });
    } else {
      console.log('Insufficient funds. Transfer failed.');
    }
  }

  generateReport() {
    console.log('Account Number:', this.accountNumber);
    console.log('Account Holder:', this.accountHolder);
    console.log('Balance:', this.balance);
    console.log('Transaction History:');
    this.transactions.forEach(transaction => {
      console.log(transaction.type, '- Amount:', transaction.amount, '- Timestamp:', transaction.timestamp);
    });
  }
}

// Creating customer accounts
const account1 = new BankAccount('001', 'John Doe', 1000);
const account2 = new BankAccount('002', 'Jane Smith', 500);

// Performing transactions
account1.deposit(500);
account1.withdraw(200);
account2.deposit(1000);
account1.transfer(300, account2);

// Generating account reports
account1.generateReport();
account2.generateReport();
```

This code demonstrates a basic implementation of a banking system with account management and transaction functionalities. It utilizes classes, object-oriented principles, and array operations to simulate banking operations.