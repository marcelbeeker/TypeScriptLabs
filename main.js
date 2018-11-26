"use strict";
var bic = 'TYPEDBANK';
var upperBound = 999999999;
function createAccountNumber() {
    var computedNumber = Math.floor(Math.random() * upperBound) + 1;
    var returnObject = {
        Number: computedNumber,
        Bic: bic,
        toString: function () {
            return bic + ' ' + computedNumber;
        }
    };
    return returnObject;
}
var createCustomer = function (firstName, lastName, preposition) {
    return {
        firstName: firstName,
        lastName: lastName,
        preposition: preposition,
        toString: function () {
            return "" + this.firstName + (this.preposition ? " " + this.preposition : '') + " " + this.lastName;
        }
    };
};
var createBankAccount = function (customer) {
    return {
        customer: customer,
        bankAccount: createAccountNumber(),
        toString: function () {
            return "[" + this.bankAccount.toString() + "] " + this.customer.toString();
        }
    };
};
var bankAccounts = [
    createBankAccount(createCustomer('Alfred', 'Kwak', 'Jodocus')),
    createBankAccount(createCustomer('Brad', 'Pit')),
    createBankAccount(createCustomer('Jack', 'Sparrow'))
];
bankAccounts.forEach(function (bankAccount) {
    var account = bankAccount;
    console.log(bankAccount.toString());
});
//# sourceMappingURL=main.js.map