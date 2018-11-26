const bic = 'TYPEDBANK';

const upperBound = 999999999;

function createAccountNumber() {

    let computedNumber = Math.floor(Math.random() * upperBound) + 1;

    let returnObject = {
        Number: computedNumber,
        Bic: bic,
        toString() {
            return bic + ' ' + computedNumber
        }
    };

    return returnObject;
}

const createCustomer = (firstName: string, lastName: string, preposition?: string) => {
    return {
        firstName,
        lastName,
        preposition,
        toString() {
            return `${this.firstName}${this.preposition ? ` ${this.preposition}` : ''} ${this.lastName}`;
        }
    };
};

const createBankAccount = (customer: any) => {

    return {
        customer: customer,
        bankAccount: createAccountNumber(),
        toString(){
            return `[${this.bankAccount.toString()}] ${this.customer.toString()}`
        } 
    };
}

const bankAccounts = [
    createBankAccount(createCustomer('Alfred', 'Kwak', 'Jodocus')),
    createBankAccount(createCustomer('Brad', 'Pit')),
    createBankAccount(createCustomer('Jack', 'Sparrow'))
];

bankAccounts.forEach(function(bankAccount){
   var account = bankAccount;
   console.log(bankAccount.toString());
});

