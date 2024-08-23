// Create a function createBankAccount that takes an initial balance as a parameter.
// Inside createBankAccount, return an object with two methods:
// deposit(amount): Adds the amount to the balance.
// withdraw(amount): Subtracts the amount from the balance (if there are sufficient funds).
// Use closures to make sure that the balance is private and only accessible through the methods.
function createBankAccount(initialbalance){
   let account =initialbalance;
    return  {
        deposit:function(amount){
            account +=amount;
            return `deposited amount ${amount} newbalcance ${account}`;

        },
        withdraw: function(amount){
            if(amount >account){
                console.log("your balnce is too low");
            }
            account -= amount;
            return `withdrawn amount ${amount} newbalance ${account}`;


        },
        getbalance: function(){
            return `balance ${account}`;

        }
        
        



    };
    
}
const totalbalance =createBankAccount(200);
console.log(totalbalance.deposit(200));
console.log(totalbalance.withdraw(100));
console.log(totalbalance.getbalance());
console.log(totalbalance.withdraw(1000));
