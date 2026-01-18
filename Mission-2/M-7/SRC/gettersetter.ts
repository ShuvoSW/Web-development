// getter
// setter

class BankAccount {
    // readonly userId: number;
    public userId: number;
    public userName: string;
    private _userBalance: number;
    // protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    // balance k set krtese
    // addBalance(balance: number) {
    //     return this._userBalance = this._userBalance + balance;
    // }
    
    //setter use kore set korte chai
    set addBalance(amount: number) {
        this._userBalance = this._userBalance + amount;
    }

    // get krbo
    // getBalance() {
    //     return this._userBalance
    // }

    // getter use kore get korte chai
    get getBalance() {
        return this._userBalance
    }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// mezbaBhaiAccount.addBalance(22);
// mezbaBhaiAccount.addBalance(59);

// console.log(mezbaBhaiAccount.getBalance());

mezbaBhaiAccount.addBalance = 100;
mezbaBhaiAccount.addBalance = 100;

console.log(mezbaBhaiAccount.getBalance);
// console.log(mezbaBhaiAccount);

