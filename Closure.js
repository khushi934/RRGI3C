

function bankAccount(){
    let balance = 1000
    return{
        deposit(amount){
            balance += amount
            console.log("Balnce :" + balance)
        },
        withdraw(amount){
            balance -= amount
            console.log("Balnce :" + balance)
        }

    }
}

const account = bankAccount()
account.deposit(1000)
account.withdraw(200)