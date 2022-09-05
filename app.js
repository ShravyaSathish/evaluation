var AccNumber = 'ESRT234RT511'
var count = 0
const account = class{
    constructor(name, amount, deposit, withdraw, email, phoneno){
        this.name = name
        this.amount = amount
        this.deposit = deposit
        this.withdraw = withdraw
        this.email = email
        this.phoneno = phoneno
        this.date = new Date()
        this.accountNo = AccNumber + count
        count++
    }
    
    get initialAmount(){
        return this.amount
    }
    get depositAmount(){
        return this.deposit
    }
    get withdrawAmount(){
        return this.withdraw
    }
    calculateInterest( year, rate){
        var interest = rate/100+1
        return this.amount = parseFloat((this.amount*Math.pow(interest, year)).toFixed(4))
    }
}
let accounts = []
const account1 = new account('shravya',34000, 20000, 10000, 'shravya@gmail.com',7423456787)
console.log(account1)
const account2 = new account('keerthika', 50000, 20000, 10000, 'keerthika@gmail.com', 2341674848)
console.log(account2)
accounts.push(account1, account2)


account.prototype.deposit = ()=>{ 
    return account1.initialAmount + account1.depositAmount
}
console.log(account.prototype.deposit())

account.prototype.withdraw = ()=>{ 
    return  account1.initialAmount - account1.withdraw 
}
console.log(account.prototype.withdraw())

account.prototype.transfer=(amount, account)=>{
    if(this.withdraw && account.deposit(amount)){
        console.log(` transfer ${amount} has been moved from ${this.name} to ${account.name}`)
        return true
    }
    return false
    
}
console.log(account.prototype.transfer())



//display calculate interest
console.log('Interest is ', + account1.calculateInterest(14,2))



class casa extends account{
    constructor(name, initialAmount, email, phoneno, type){
        super(name, initialAmount, email, phoneno)
        this.type =type
    }
    balance(){
        let current_date = new Date()
        let previous_date = this.date
        let previous_year = previous_date.getFullYear()
        let current_year = current_date.getFullYear()
        let diff = current_year-previous_year
        if(this.type = "savings"){
            let interest = (this.initialAmount*diff*3.5)/100
            console.log(this.initialAmount)
            let totalBalance = this.initialAmount + interest
            console.log(`your total balance is  ${totalBalance}`)
        }else{
            let interest = (this.initialAmount*diff*3.5)/100
            let totalBalance  = this.initialAmount+ interest 
            console.log(`current balance ${totalBalance}`)  
        }
    }
}

value = new casa( 'shravya', 5000,'shravy@gmail.com',2343566, 'savings')
value.balance()

const loan = class {
    constructor(accountNo, name, initialAmount){
        this.accountNo = accountNo
        this.name = name
        this.initialAmount = initialAmount
    }
    calculateLoanInterest(month, rate){
        let interest = (this.initialAmount * (rate * 0.01))/month
        return this.initialAmount = ((this.initialAmount/month) + interest)
    }
}

loan1 = new loan('ESRT234RT5111', 'shravya', 5000)
console.log(" Loan interest of " + account1.name + " is " + loan1.calculateLoanInterest(12,2))


const AccountManager = class {
    constructor(AccountList){
        this.AccountList = AccountList
    }
    printBalance(AccNumber){
        let filterAccount = accounts.filter((e)=>{
            e.AccNumber = AccNumber
        })
        filterAccount.length >0 ? console.log(`${filterAccount[0].name} balance ${filterAccount[0].amount} ${filterAccount[0].deposit} ${filterAccount[0].withdraw} ${filterAccount[0].email}, ${filterAccount[0].phoneno}`) : console.log(`no accounts associated with account number ${AccNumber}`)
    }
}
let AccountManager1 = new AccountManager(account)
AccountManager1.printBalance('ESRT234RT5112')