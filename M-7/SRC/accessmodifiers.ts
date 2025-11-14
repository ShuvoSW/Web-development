// access >> modify

class BankAccount {
    // readonly userId: number;
    public userId: number;
    public userName: string;
    // private userBalance: number;
    protected _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    // private addBalance(balance: number) {}
    // protected addBalance(balance: number) {}
    addBalance(balance: number) {
        this._userBalance = this._userBalance + balance;
    }
}

// class studentBankAccount extends BankAccount {
//     test() {
//         this._userBalance
//     }
// }
const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

mezbaBhaiAccount.userId = 222;

mezbaBhaiAccount.addBalance(22);
mezbaBhaiAccount.addBalance(58);

console.log(mezbaBhaiAccount)




















































